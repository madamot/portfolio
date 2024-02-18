import { ProjectModelContentField, SidebarRecord } from '../generated/graphql'

export const renderTestComponent = <ComponentData extends ProjectModelContentField | SidebarRecord>(
  component: (data: ComponentData) => string,
  data: ComponentData
) => {
  document.body.innerHTML = component(data)
}
