import { Badge, Heading } from "@chakra-ui/react"
import { ButtonClinkRobe } from "clink-robe"
import LayoutHeader from "./LayoutHeader"

export default function LayoutNotFound(props: {
  id?: string
  label: string
}) {
  const badge = props.id && <Badge>{props.id}</Badge>
  return (
    <>
      <LayoutHeader />
      {badge}
      <Heading size='sm'>{props.label} Not Found</Heading>
      <ButtonClinkRobe to="/games">Games</ButtonClinkRobe>
    </>
  )
}