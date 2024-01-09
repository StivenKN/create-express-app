import path from 'path'
import colors from 'colors'
import createFolder from './lib/createFolder'
import createAppStructure from './lib/createAppStructure'
import { existsSync } from 'fs'
import { createInterface } from 'readline'

/**
 * Abort controller variable if cancelled
 */
const ac = new AbortController()
const signal = ac.signal

/**
 * Interface required by node and cmd to ask project name every time is needed and start to build the expected project
*/
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

/**
 * Async function to ask project name every time is needed and start to build the expected project
 * @returns {string}
 * @example
 * askProjectName()
  .then(() => {doSomething...})
  .catch(() => {doSomething...})
 * @author ConanGH-S
 */
export const askProjectName = async (): Promise<string> => {
  return await new Promise((resolve) => {
    rl.question(`${colors.blue('?')} Application name: ${colors.gray('->')} `, (response: string) => {
      do {
        if (existsSync(response)) console.warn(colors.yellow('! Warning: ') + 'The project name already exists, please choose another one' + '\n')
        else {
          resolve(response)
          rl.close()
          break
        }
      } while (existsSync(response))
    })
  })
}

askProjectName()
  .then((userLocation: string) => {
    const location = userLocation.trim().replace(/ /g, '-')
    const searchSpaces = userLocation.includes(' ')
    const currentDirectory = process.cwd()
    try {
      if (searchSpaces) console.warn(colors.yellow('! Warning: ') + 'Your spaces will be trimmed and converted to "-"')
      const actualPath = path.join(currentDirectory, location)
      if (actualPath !== currentDirectory) createFolder(location)
      createAppStructure(location).then(() => {
        console.info(colors.green('Run: ') + colors.yellow(`cd ${location}`))
        console.info(colors.green('Run: ') + colors.yellow('npm install') + colors.green(' to install dependencies'))
        console.info(colors.green('Run: ') + colors.yellow('npm start or npm start:dev') + colors.green(' to initializate the app'))
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
  })

/**
 * If the user abort create the app, show a message
 */
signal.addEventListener('abort', () => {
  console.log('Process ended')
}, { once: true })
