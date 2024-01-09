import { askProjectName } from './index'

jest.mock('./index')

describe('Ask the project name', () => {
  it('creates a project without name', async () => {
    const mockedAskProjectName = jest.mocked(askProjectName, { shallow: true })
    mockedAskProjectName.mockResolvedValue('express-app')

    const result = await askProjectName()

    expect(result).toBe('express-app')
  })
})
