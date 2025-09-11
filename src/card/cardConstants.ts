import { defaultDropAnimationSideEffects } from '@dnd-kit/core'

export const SCHEME_WIDTH = 'min(19vw, 94px)'
export const SCHEME_RATIO = '1/1.8195'
export const DROP_ANIMATION = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.4'
      }
    }
  })
}
export const BUTTON_GRAY = 'rgb(74, 85, 104)'
export const BUTTON_GRAY_BORDER = '2px dotted gray'

export const CAN_CARRY_OUT_STYLES = { border: '2px solid white' }
export const CANT_CARRY_OUT_STYLES = { border: '2px solid navy' }
export const CARRYING_OUT_STYLES = { border: '2px solid red' }
