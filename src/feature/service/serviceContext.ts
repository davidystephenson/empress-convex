import contextCreator from "context-creator";
import gameContext from "../game/gameContext";
import type { Id } from "../../../convex/_generated/dataModel";
import createServiceInput from "./createServiceInput";
import { service } from "@davidystephenson/cardservice";

const serviceContext = contextCreator({
  name: 'Service',
  useValue: (props: {
    startingUserId: Id<'users'>
  }) => {
    const game = gameContext.use()
    const input = createServiceInput({ game, startingUserId: props.startingUserId })
    const output = service(input)
    console.log('Service output:', output)
    return output
  }
})
export default serviceContext;