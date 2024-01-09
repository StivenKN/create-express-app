/**
 * Content for package.json
 * @author ConanGH-S
 */
export default `{
  "name": "my-app",
  "version": "0.0.1",
  "type": "module",
  "description": "",
  "scripts": {
    "start": "node src/index.js",
    "start:dev": "nodemon src/index.js"
  },
  "keywords": ["APIREST"],  
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "latest"
  },
  "dependencies": {
    "bcrypt": "latest",
    "cookie-parser": "latest",
    "cors": "latest",
    "dotenv": "latest",
    "express": "latest",
    "jsonwebtoken": "latest"
  }
}`
