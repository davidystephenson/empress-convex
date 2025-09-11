import rangeContext from './rangeContext'
import RangeFinalDetails from './RangeFinalDetails'
import { Text } from '@chakra-ui/react'

export default function UnrangedDetails () {
  const range = rangeContext.use()
  const final = range.minimum === 0
  if (final) {
    return <RangeFinalDetails />
  }
  const minimumPlays = range.minimum === 1 ? 'play' : 'plays'
  return <Text>There will be {range.minimum} {minimumPlays} after this.</Text>
}
