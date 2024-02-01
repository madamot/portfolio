import { ButtonGroupRecord, ButtonRecord } from '../../generated/graphql'
import { renderComponent } from '../../utils/generator'

interface RenderButtonRecord extends ButtonRecord {
  _blank?: boolean
}

interface RenderButtonGroupRecord extends ButtonGroupRecord {
  buttons: RenderButtonRecord[]
}

export const render = (data: RenderButtonGroupRecord): string => {
  data.buttons.forEach(button => {
    if (button.target == '_blank') button._blank = true
    else button._blank = false
  })

  return renderComponent(data)
}
