const fs = require('fs')
const path = require('path')
const Mustache = require('mustache')

const templatesFolder = path.join(__dirname, '..', 'templates')

export const render = async (data: any) => {
  return loadTemplate('page-standard').render(data)
}

const loadTemplate = (template: string) => {
  return require(path.join(templatesFolder, template, template + '.js'))
}

const openTemplate = (template: string) => {
  return fs.readFileSync(path.join(templatesFolder, template, template + '.html'), 'UTF-8')
}

export const renderComponent = (data: any) => {
  return Mustache.render(openTemplate('page-standard'), data)
}
