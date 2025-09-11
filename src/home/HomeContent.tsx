import LayoutHeader from "../layout/LayoutHeader";
import { ButtonClinkRobe} from 'clink-robe'

export default function HomeContent () {
  return (
    <>
      <LayoutHeader />
      <ButtonClinkRobe to="/games">Games</ButtonClinkRobe>
    </>
  )
}