import gitIgnoreData from '../data/gitIgnore.data'
import packageData from '../data/package.data'
import userControllersData from '../data/userControllers.data'
import userMiddlewareData from '../data/userMiddlewares.data'
import userRoutesData from '../data/userRoutes.data'

/**
 * Contains all the project structure to create
 * @author ConanGH-S
 */
export default {
  files: [{ name: 'package.json', content: packageData }, { name: '.gitignore', content: gitIgnoreData }],
  folders: 'src',
  srcStructure: [
    { folderName: 'controllers', folderFile: { name: 'user.controllers.js', content: userControllersData } },
    { folderName: 'middlewares', folderFile: { name: 'user.middlewares.js', content: userMiddlewareData } },
    { folderName: 'routes', folderFile: { name: 'user.routes.js', content: userRoutesData } }
  ]
}
