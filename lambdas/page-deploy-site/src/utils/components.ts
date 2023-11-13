const generator = require('./generator')

export const render = async (data: any) => {
  const components = data.project.content

  if (Array.isArray(components))
    return components.map(component => renderEachComponent(component)).join('')
}

const renderEachComponent = (component: any) => {
  return generator.loadComponent(component._modelApiKey).render(component)
}
