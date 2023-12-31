# Install dependencies only when needed
FROM node:18-alpine3.18 AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG NEXT_PUBLIC_MEDUSA_BACKEND_URL
ARG NEXT_PUBLIC_BASE_UR
ARG POSTGRES_URL
ARG REDIS_URL
ARG NEXT_PUBLIC_SEARCH_APP_ID=
ARG NEXT_PUBLIC_SEARCH_ENDPOINT
ARG NEXT_PUBLIC_SEARCH_API_KEY
ARG NEXT_PUBLIC_SEARCH_INDEX_NAME
ARG REVALIDATE_SECRET

ENV NEXT_PUBLIC_MEDUSA_BACKEND_URL=$NEXT_PUBLIC_MEDUSA_BACKEND_URL
ENV NEXT_PUBLIC_BASE_UR=$NEXT_PUBLIC_BASE_UR
ENV POSTGRES_URL=$POSTGRES_URL
ENV REDIS_URL=$REDIS_URL
ENV NEXT_PUBLIC_SEARCH_APP_ID=$NEXT_PUBLIC_SEARCH_APP_ID=
ENV NEXT_PUBLIC_SEARCH_ENDPOINT=$NEXT_PUBLIC_SEARCH_ENDPOINT
ENV NEXT_PUBLIC_SEARCH_API_KEY=$NEXT_PUBLIC_SEARCH_API_KEY
ENV NEXT_PUBLIC_SEARCH_INDEX_NAME=$NEXT_PUBLIC_SEARCH_INDEX_NAME
ENV REVALIDATE_SECRET=$REVALIDATE_SECRET

ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/next.config.js ./
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/tailwind.config.js ./tailwind.config.js
COPY --from=builder --chown=nextjs:nodejs /app/store-config.js ./store-config.js
COPY --from=builder --chown=nextjs:nodejs /app/store.config.json ./store.config.json

USER nextjs

ARG PORT
EXPOSE $PORT

CMD ["yarn", "start"]
