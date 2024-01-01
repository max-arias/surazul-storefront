import { Container, Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"
import { useHits, useSearchBox } from "react-instantsearch-hooks-web"

const ShowAll = ({ close }: { close: () => void }) => {
  const { hits } = useHits()
  const { query } = useSearchBox()

  if (query === "") return null
  if (hits.length > 0 && hits.length <= 6) return null

  if (hits.length === 0) {
    return (
      <Container className="flex gap-2 justify-center h-fit py-2">
        <Text>No se encontraron resultados.</Text>
      </Container>
    )
  }

  return (
    <Container className="flex flex-col small:flex-row gap-2 justify-center items-center h-fit py-4 small:py-2">
      <Text>Mostrando los primeros 6 resultados.</Text>
      <InteractiveLink href={`/search/${query}`} onClick={close}>
        Ver todos
      </InteractiveLink>
    </Container>
  )
}

export default ShowAll
