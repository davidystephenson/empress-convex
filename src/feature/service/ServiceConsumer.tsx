import { Heading, HStack, Stack } from "@chakra-ui/react";
import serviceContext from "./serviceContext";
import TinyRankedCard from "../card/TinyRankedCard";

export default function ServiceConsumer () {
  const service = serviceContext.use()

  const palaceCards = service.game.center.map(card => {
    return <TinyRankedCard key={card.id} rank={card.rank} />
  })
  return (
    <Stack>
      <HStack>
        <Stack spacing='3px'>
          <Heading size='sm'>Palace</Heading>
          <HStack>
            {palaceCards}
          </HStack>
        </Stack>
      </HStack>
    </Stack>
  )
}