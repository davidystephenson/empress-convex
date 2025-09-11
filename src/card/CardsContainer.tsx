import { Flex, type FlexProps } from '@chakra-ui/react'
import { forwardRef, type JSX, type ReactNode, type Ref } from 'react'

function View ({
  children,
  ...otherProps
}: {
  children: ReactNode
} & FlexProps,
ref: Ref<HTMLDivElement>): JSX.Element {
  return (
    <Flex
      flexWrap='wrap'
      gap='2px'
      ref={ref}
      rowGap='2px'
      {...otherProps}
    >
      {children}
    </Flex>
  )
}

const CardsContainer = forwardRef(View)
export default CardsContainer
