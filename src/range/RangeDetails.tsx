import rangeContext from "./rangeContext"
import UnrangedDetails from "./UnrangedDetails"
import { Text } from "@chakra-ui/react"

export default function RangeDetails() {
  const range = rangeContext.use()
  const ranged = range.maximum > range.minimum
  if (!ranged) {
    return <UnrangedDetails />
  }
  const minimumPlays = range.minimum === 1 ? 'play' : 'plays'
  const maximumPlays = range.maximum === 1 ? 'play' : 'plays'
  return (
    <>
      <Text>There will be at least {range.minimum} {minimumPlays} after this.</Text>
      <Text>There will be at most {range.maximum} {maximumPlays} after this.</Text>
    </>
  )
}