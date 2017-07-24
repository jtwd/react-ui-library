import Index from './index'

test('Index renders without crashing', () => {
  expect(JSON.stringify(Index)).toMatchSnapshot()
})
