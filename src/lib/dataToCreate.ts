import gitIgnoreData from '../data/gitIgnore.data'
import packageData from '../data/package.data'

export default {
  files: [{ name: 'package.json', content: packageData }, { name: '.gitignore', content: gitIgnoreData }],
  folders: 'src',
  srcStructure: [
    { folderName: 'controllers', folderFile: 'user.controllers.js' },
    { folderName: 'middlewares', folderFile: 'user.middlewares.js' },
    { folderName: 'routes', folderFile: 'user.routes.js' }
  ]

}
