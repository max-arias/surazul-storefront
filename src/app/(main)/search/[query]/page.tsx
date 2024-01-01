import { Metadata } from "next"
import { search } from "../actions"
import SearchResultsTemplate from "@modules/search/templates/search-results-template"

export const metadata: Metadata = {
  title: "Búsqueda",
  description: "Explora todos nuestros productos.",
}

export default async function StorePage({
  params,
}: {
  params: { query: string }
}) {
  const { query } = params
  const hits = await search(query)

  return <SearchResultsTemplate query={query} hits={hits} />
}
