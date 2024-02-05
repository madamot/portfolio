import { loadComponent, loadComponents, renderTemplate } from '../../utils/generator'

export const render = async (data: any) => {
  data.renderedNavbar = loadComponent('navigation').render(data.project?.navigation)

  if (data?.project?.sidebar) {
    data.renderedSidebar = loadComponent('sidebar').render(data.project.sidebar)
    data.displaySidebarOnRight = data.project.sidebar.display_on_right
  }
  data.renderedComponents = loadComponents(data.project.content)

  return renderTemplate(data)
}
