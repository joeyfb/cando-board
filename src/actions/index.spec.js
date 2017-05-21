import * as actions from './index'

describe('list actions', () => {

  it('addList should create ADD_LIST  action', () => {
    expect(actions.addList('To Do')).toEqual({
      type: 'ADD_LIST',
      id: 0,
      title: 'To Do'
    })
  })

})
