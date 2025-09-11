import { HStack, Stack } from "@chakra-ui/react";
import ServicePalace from "./ServicePalace";
import ServiceTrial from "./ServiceTrial.tsx";
import ServiceDungeon from "./ServiceDungeon.tsx";

export default function ServiceConsumer () {
  return (
    <Stack>
      <HStack justifyContent='space-between'>
        <ServicePalace />
        <ServiceTrial />
        <ServiceDungeon />
      </HStack>
    </Stack>
  )
}