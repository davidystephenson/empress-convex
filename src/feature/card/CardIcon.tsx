import { Icon, type IconProps } from '@chakra-ui/react'
import * as gi from 'react-icons/gi'
import * as io5 from 'react-icons/io5'
import * as ri from 'react-icons/ri'
import * as tb from 'react-icons/tb'
import * as lu from 'react-icons/lu'
import * as bi from 'react-icons/bi'
import * as fa6 from 'react-icons/fa6'
import * as pi from 'react-icons/pi'
import * as fa from 'react-icons/fa'
import * as md from 'react-icons/md'
import type { IconType } from 'react-icons'
import type { JSX } from 'react'
import guardCard from './guardCard'

const icons: Record<string, Record<string, IconType>> = {
  gi,
  io5,
  ri,
  tb,
  lu,
  bi,
  fa6,
  md,
  pi,
  fa
}

export default function CardIcon (props: {
  rank: number
} & IconProps): JSX.Element {
  const { rank, ...rest } = props
  const card = guardCard({ rank })
  console.log('icons', icons)
  const iconFamily = icons[card.iconFamily]
  const icon = iconFamily[card.icon]
  return <Icon as={icon} {...rest} />
}