import path from 'path'
import createFile from './createFile'
import createFolder from './createFolder'
import dataToCreate from './dataToCreate'
import appData from '../data/app.data'

const createAppStructure = async (currentLocation: string): Promise<any> => {
  const { files, folders, srcStructure } = dataToCreate
  const folderPath = path.join(currentLocation, folders)
  try {
    for (const file of files) {
      createFile(currentLocation, file.name, file.content)
    }

    createFolder(folderPath)
    createFile(folderPath, 'app.js', appData)
    createFile(folderPath, '.env', '')

    for (const src of srcStructure) {
      createFolder(path.join(folderPath, src.folderName))
      createFile(path.join(folderPath, src.folderName), src.folderFile, '')
    }
  } catch (error) {
    console.error(error)
  }
}

export default createAppStructure
