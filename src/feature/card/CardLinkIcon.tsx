import type { JSX } from "react"
import { Image } from "@chakra-ui/react"

export default function CardLinkIcon (props: {
  src: string
}): JSX.Element {
  return <Image src={props.src} h='16px' />
}

