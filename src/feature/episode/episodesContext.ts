import contextCreator from "context-creator";
import type { Doc } from "../../../convex/_generated/dataModel";

const episodesContext = contextCreator({
  name: 'episodes',
  useValue: (props: {
    starts: Array<Doc<'starts'>>
  }) => {
    return props
  }
})
export default episodesContext;