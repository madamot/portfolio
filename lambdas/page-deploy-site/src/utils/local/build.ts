const fs = require('fs')
const path = require('path')

import { render } from '../generator'

const localCacheDirectory = path.join(__dirname, '..', '/..', '/..', 'local-data')
const localOutputDirectory = path.join(__dirname, '..', '/..', '/..', 'local-dist')

const generatePage = async (pageName: string) => {
  try {
    const data = JSON.parse(
      fs.readFileSync(path.join(localCacheDirectory, pageName, pageName + '.json'), 'UTF-8')
    )

    const page = await render(data)

    saveFile(pageName, page, data)
  } catch (error) {
    console.log(error)
  }
}

const saveFile = (filename: string, renderedPage: any, data: any) => {
  const baseURL = data.project.location
  const directoryPath = localOutputDirectory + '/' + baseURL

  fs.mkdirSync(directoryPath, { recursive: true })
  fs.writeFileSync(path.join(directoryPath, 'index.html'), renderedPage)
}

console.time('Generate Test sites')
fs.readdirSync(localCacheDirectory).forEach((page: string) => generatePage(page))
console.timeEnd('Generate Test sites')
