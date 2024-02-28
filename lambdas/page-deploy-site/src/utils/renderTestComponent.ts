import { HeaderRecord, ProjectModelContentField, SidebarRecord } from '../generated/graphql'

export const renderTestComponent = <
  ComponentData extends ProjectModelContentField | SidebarRecord | HeaderRecord
>(
  component: (data: ComponentData) => string,
  data: ComponentData
) => {
  document.body.innerHTML = component(data)
}
