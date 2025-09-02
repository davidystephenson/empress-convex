import { api } from '../../../convex/_generated/api'
import { useArchedQuery } from "../arched/useArchedQuery";
import LayoutHeader from "../layout/LayoutHeader";
import { ButtonClinkRobe} from 'clink-robe'

export default function HomePage () {
  const homeQuery = useArchedQuery({ args: {}, query: api.getHome.default })
  return (
    <>
      <LayoutHeader loading={homeQuery.loading} name={homeQuery.data?.user?.name} />
      <ButtonClinkRobe to="/games">Games</ButtonClinkRobe>
    </>
  )
}