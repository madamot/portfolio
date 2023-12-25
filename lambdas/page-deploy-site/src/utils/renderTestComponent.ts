import { ProjectModelContentField } from '../generated/graphql'

export const renderTestComponent = <ComponentData extends ProjectModelContentField>(
  component: (data: ComponentData) => string,
  data: ComponentData
) => {
  document.body.innerHTML = component(data)
}
