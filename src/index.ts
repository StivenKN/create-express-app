import path from 'path'
import colors from 'colors'
import prompt from 'promptly'
import createFolder from './lib/createFolder'
import createAppStructure from './lib/createAppStructure'
import { existsSync } from 'fs'

/**
 * Async function to ask project name every time is needed and start to build the expected project
 * @returns {string}
 * @async
 * @example
 * askProjectName()
  .then(() => {doSomething...})
  .catch(() => {doSomething...})
 * @author ConanGH-S
 */
const askProjectName = async (): Promise<string> => {
  let projectName: string
  do {
    projectName = await prompt.prompt(`${colors.blue('?')} Application name: ${colors.gray('->')} `, { default: 'express-app', trim: true })
    if (existsSync(projectName)) console.warn(colors.yellow('! Warning: ') + 'The project name already exists, please choose another one' + '\n')
    else break
  } while (existsSync(projectName))
  return projectName
}

askProjectName()
  .then((userLocation: string) => {
    let location = userLocation.trim().replace(/ /g, '-')
    const searchSpaces = userLocation.includes(' ')
    const currentDirectory = process.cwd()
    try {
      if (location.length === 0) location = 'express-app'

      if (searchSpaces) console.warn(colors.yellow('! Warning: ') + 'Your spaces will be trimmed and converted to "-"')
      const actualPath = path.join(currentDirectory, location)
      if (actualPath !== currentDirectory) createFolder(location)
      createAppStructure(location).then(() => {
        console.info(colors.green('Run: ') + colors.yellow(`cd ${location}`))
        console.info(colors.green('Run: ') + colors.yellow('npm install') + colors.green(' to install dependencies'))
        console.info(colors.green('Run: ') + colors.yellow('npm start') + colors.green(' to initializate the app'))
        process.exit(0)
      })
        .catch((err: string) => {
          console.log(colors.red(err))
        })
    } catch (error) {
      console.error(error)
    }
  })
  .catch((error) => {
    console.error(error)
    process.exit(0)
  })
