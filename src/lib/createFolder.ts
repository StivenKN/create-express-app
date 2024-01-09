import path from 'path'
import fs from 'fs'

/**
 * Contains all the process to create a folder using the user path and the cmd call path.
 * @param {string} userPathName
 * @returns {void}
 * @example
 * createFolder('src')
 * @author KrlosPK
 */
const createFolder = (userPathName: string): void => {
  const currentDirectory = process.cwd()
  const folderPath = path.join(currentDirectory, userPathName)

  try {
    fs.mkdirSync(folderPath)
  } catch (error) {
    console.error(error)
  }
}

export default createFolder
