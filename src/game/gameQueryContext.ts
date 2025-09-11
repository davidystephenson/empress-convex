import { api } from "../../convex/_generated/api";
import queryContext from "../arched/queryContext";

const gameQueryContext = queryContext({
  name: 'Game Query',
  query: api.getGame.default
})
export default gameQueryContext;