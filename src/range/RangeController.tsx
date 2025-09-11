import RangeConsumer from "./RangeConsumer";
import rangeContext from "./rangeContext";

export default function RangeController () {
  return (
    <rangeContext.Provider>
      <RangeConsumer />
    </rangeContext.Provider>
  )
}