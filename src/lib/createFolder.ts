import path from 'path'
import fs from 'fs'

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
