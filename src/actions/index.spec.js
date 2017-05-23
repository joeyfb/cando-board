import * as actions from './index'

describe('list actions', () => {

  it('addList should create ADD_LIST action', () => {
    expect(actions.addList('To Do')).toEqual({
      type: 'ADD_LIST',
      id: 0,
      title: 'To Do'
    })
  })

  it('addItem should create ADD_ITEM action', () => {

    expect(actions.addItem(
          1,
          'Cover untested case',
          'for add item')
    ).toEqual({
      type: 'ADD_ITEM',
      id: 1,
      items: [
        {
          id: 0,
          title: 'Cover untested case',
          description: 'for add item'
        }
      ]
    })

  })

  it('removeItem should create REMOVE_ITEM action', () => {

    expect(actions.removeItem(0,0)
    ).toEqual({
      type: 'REMOVE_ITEM',
      id: 0,
      items: [
        {
          id: 0
        }
      ]
    })

  })

  it('removeList should create REMOVE_LIST action', () => {

    expect(actions.removeList(0,0)
    ).toEqual({
      type: 'REMOVE_LIST',
      id: 0,
    })

  })

})
