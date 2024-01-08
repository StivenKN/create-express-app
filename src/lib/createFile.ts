import fs from 'fs'
import path from 'path'

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
