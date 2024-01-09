/**
 * Content for /src/controllers/user.controllers.js
 * @author ConanGH-S
 */
export default `export const getUsers = async (req, res) => {
  try {
    return res.status(200).json({ name: 'John Doe', email: 'definitelynotjohndoe@example.com' })
  } catch (error) {
    console.error(error)
  }
}`
