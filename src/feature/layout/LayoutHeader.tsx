import { Heading, HStack } from "@chakra-ui/react";
import LayoutAuth from "./LayoutAuth";
import ClinkRobe from "clink-robe";

export default function LayoutHeader(props: {
  loading?: boolean
}) {
  return (
    <HStack justifyContent='space-between'>
      <ClinkRobe to='/games'>
        <Heading size='md'>Long Live the Empress</Heading>
      </ClinkRobe>
      <LayoutAuth loading={props.loading} />
    </HStack>
  )
}