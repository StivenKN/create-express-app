import path from 'path'
import readline from 'readline'
import colors from 'colors'
import createFolder from './lib/createFolder'
import createAppStructure from './lib/createAppStructure'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question(`${colors.blue('?')} Choose your application name: ${colors.gray('->')} `, (location: string) => {
  const currentDirectory = process.cwd()
  const actualPath = path.join(currentDirectory, location)
  if (actualPath !== currentDirectory) createFolder(location)
  createAppStructure(location).then(() => {
    console.log(colors.green('Done!'))
  })
    .catch((err: string) => {
      console.log(colors.red(err))
    })
  rl.close()
})
