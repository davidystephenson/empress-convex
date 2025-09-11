import guardCard from './guardCard'

export default function getCardBackground (props: {
  rank: number
  weight?: number
}): string {
  const scheme = guardCard({ rank: props.rank })
  const weight = props.weight ?? 700
  return `${scheme.color.toLowerCase()}.${weight}`
}
