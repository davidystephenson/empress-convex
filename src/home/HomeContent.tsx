import type { JSX } from 'react'
import LayoutHeader from '../layout/LayoutHeader'
import { ButtonClinkRobe } from 'clink-robe'

export default function HomeContent (): JSX.Element {
  return (
    <>
      <LayoutHeader />
      <ButtonClinkRobe to='/games'>Games</ButtonClinkRobe>
    </>
  )
}
