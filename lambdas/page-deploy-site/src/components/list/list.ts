import { ContentBoxRecord, ListRecord } from '../../generated/graphql'
import { loadComponents, renderComponent } from '../../utils/generator'

export interface ListBuildData extends ListRecord {
  items: ContentBoxRender[]
}

interface ContentBoxRender extends ContentBoxRecord {
  renderedItem: string
}

export const render = (data: ListRecord) => {
  const renderListData: ListBuildData = {
    ...data,
    items: data.items.map(item => ({
      ...item,
      renderedItem: loadComponents(item.content),
    })),
  }

  return renderComponent(renderListData)
}
