import { loadComponent, loadComponents, renderTemplate } from '../../utils/generator'

export const render = async (data: any) => {
  data.renderedNavbar = loadComponent('navigation').render(data.project?.navigation)

  if (data?.project?.sidebar) {
    data.renderedSidebar = loadComponent('sidebar').render(data.project.sidebar)
  }
  data.renderedComponents = loadComponents(data.project.content)

  return renderTemplate(data)
}
