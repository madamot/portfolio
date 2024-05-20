import { ButtonGroupRecord, ButtonRecord } from '../../generated/graphql'
import { renderComponent } from '../../utils/generator'

interface ButtonBuildData extends ButtonRecord {
  _blank?: boolean
}

export interface ButtonGroupBuildData extends ButtonGroupRecord {
  buttons: ButtonBuildData[]
}

export const render = (data: ButtonGroupRecord): string => {
  const renderButtonGroupData: ButtonGroupBuildData = {
    ...data,
    buttons: data.buttons.map(button => ({
      ...button,
      _blank: button.target == '_blank' ? true : false,
    })),
  }

  return renderComponent(renderButtonGroupData)
}
