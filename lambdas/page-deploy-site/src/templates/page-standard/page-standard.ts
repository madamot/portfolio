import { loadComponent, loadComponents, renderTemplate } from '../../utils/generator'

export const render = async (data: any) => {
  data.renderedNavbar = loadComponent('navigation').render(data.project.navigation)

  data.renderedComponents = loadComponents(data.project.content)

  return renderTemplate(data)
}
