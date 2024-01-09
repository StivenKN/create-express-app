/**
 * Content for /src/middlewares/user.middlewares.js
 * @author ConanGH-S
 */
export default `export const checkUserData = async (req, res, next) => {
  try {
    next()
  } catch (error) {
    console.error(error)
  }
}
`
