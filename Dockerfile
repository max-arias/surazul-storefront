# Install dependencies only when needed
FROM node:alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

ARG NEXT_PUBLIC_MEDUSA_BACKEND_URL
ARG NEXT_PUBLIC_BASE_URL
ARG POSTGRES_URL
ARG REDIS_URL
ARG NEXT_PUBLIC_SEARCH_APP_ID
ARG NEXT_PUBLIC_SEARCH_ENDPOINT
ARG NEXT_PUBLIC_SEARCH_API_KEY
ARG NEXT_PUBLIC_SEARCH_INDEX_NAME
ARG REVALIDATE_SECRET

ENV NEXT_PUBLIC_MEDUSA_BACKEND_URL=$NEXT_PUBLIC_MEDUSA_BACKEND_URL
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL
ENV POSTGRES_URL=$POSTGRES_URL
ENV REDIS_URL=$REDIS_URL
ENV NEXT_PUBLIC_SEARCH_APP_ID=$NEXT_PUBLIC_SEARCH_APP_ID
ENV NEXT_PUBLIC_SEARCH_ENDPOINT=$NEXT_PUBLIC_SEARCH_ENDPOINT
ENV NEXT_PUBLIC_SEARCH_API_KEY=$NEXT_PUBLIC_SEARCH_API_KEY
ENV NEXT_PUBLIC_SEARCH_INDEX_NAME=$NEXT_PUBLIC_SEARCH_INDEX_NAME
ENV REVALIDATE_SECRET=$REVALIDATE_SECRET


RUN export NODE_OPTIONS=--openssl-legacy-provider && yarn build && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/tailwind.config.js ./tailwind.config.js
COPY --from=builder /app/store-config.js ./store-config.js
COPY --from=builder /app/store.config.json ./store.config.json

# USER nextjs

ENV PORT=80
EXPOSE 80

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1
CMD ["yarn", "start"]
