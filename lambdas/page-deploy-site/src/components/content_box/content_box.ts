import { ContentBoxRecord } from '../../generated/graphql'
import { loadComponents, renderComponent } from '../../utils/generator'

export interface ContentBoxBuildData extends ContentBoxRecord {
  renderedItems: string
}

export const render = (data: ContentBoxRecord) => {
  const renderContentBoxData: ContentBoxBuildData = {
    ...data,
    renderedItems: loadComponents(data.content),
  }

  return renderComponent(renderContentBoxData)
}
