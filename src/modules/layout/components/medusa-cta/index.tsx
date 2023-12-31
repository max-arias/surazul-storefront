import { Text } from "@medusajs/ui"
import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"
import Github from "../../../common/icons/github"

const MedusaCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
      Powered by
      <a href="https://github.com/max-arias" target="_blank" rel="noreferrer">
        <Github fill="#9ca3af" className="fill-[#9ca3af]" size={18} />
      </a>
      &
      <a href="https://www.medusajs.com" target="_blank" rel="noreferrer">
        <Medusa fill="#9ca3af" className="fill-[#9ca3af]" />
      </a>
      &
      <a href="https://nextjs.org" target="_blank" rel="noreferrer">
        <NextJs fill="#9ca3af" />
      </a>
    </Text>
  )
}

export default MedusaCTA
