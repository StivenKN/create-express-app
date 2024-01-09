import fs from 'fs'
import path from 'path'

/**
 * Contains all the process to create a new file with any extension
 * @param {string} userDirName
 * @param {string} fileName
 * @param {string} content
 * @returns {void}
 * @example
 * createFile('my-dir', 'my-file.js', 'console.log(Hello World)')
 * @author ConanGH-S
 */
const createFile = (userDirName: string, fileName: string, content: string): void => {
  const currentDirectory = process.cwd()
  const filePath = path.join(currentDirectory, userDirName, fileName)
  try {
    fs.writeFileSync(filePath, content)
  } catch (error) {
    console.error(error)
  }
}

export default createFile
