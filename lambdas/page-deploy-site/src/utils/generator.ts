const fs = require('fs')
const path = require('path')
const Mustache = require('mustache')

const templatesFolder = path.join(__dirname, '..', 'templates')

export const render = async (data: any) => {
  return await Mustache.render(loadTemplate(), data)
}

const loadTemplate = () => {
  return fs.readFileSync(
    path.join(templatesFolder, 'page-standard', 'page-standard' + '.html'),
    'UTF-8'
  )
}

const templateType = () => {}
