import path from 'path'
import createFile from './createFile'
import createFolder from './createFolder'
import dataToCreate from './dataToCreate'
import appData from '../data/app.data'

/**
 * Contains all the structure to create the app, this is the core of the bundle
 * @param {string} currentLocation
 * @returns {Promise<void>}
 * @author ConanGH-S
 */
const createAppStructure = async (currentLocation: string): Promise<void> => {
  const { files, folders, srcStructure } = dataToCreate
  const folderPath = path.join(currentLocation, folders)
  try {
    for (const file of files) {
      createFile(currentLocation, file.name, file.content)
    }

    createFolder(folderPath)
    createFile(folderPath, 'index.js', appData)
    createFile(folderPath, '.env', '')

    for (const src of srcStructure) {
      createFolder(path.join(folderPath, src.folderName))
      createFile(path.join(folderPath, src.folderName), src.folderFile.name, src.folderFile.content)
    }
  } catch (error) {
    console.error(error)
  }
}

export default createAppStructure
