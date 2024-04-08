import { HeaderRecord, SidebarRecord } from '../generated/graphql'
import { Component } from '../types/components'

export const renderTestComponent = <ComponentData extends Component | SidebarRecord | HeaderRecord>(
  component: (data: ComponentData) => string,
  data: ComponentData
) => {
  document.body.innerHTML = component(data)
}
