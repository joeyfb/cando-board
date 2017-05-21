import items from './items'

describe('items reducer', () =>
{
  it('should handle initial state', () =>
  {
    expect(
        items(undefined, {})
    ).toEqual([])
  })


  it('should handle ADD_ITEM', () =>
  {
    expect(
        items([], {
          type: 'ADD_ITEM',
          items: [
            {
              title: 'Add item reducer',
              id: 0,
              description: 'maybe tomorrow cause oh god I am sleepy'
            }
          ]
        })
    ).toEqual([{
          title: 'Add item reducer',
          id: 0,
          description: 'maybe tomorrow cause oh god I am sleepy'
    }])

    expect(
     items([{
          title: 'Add item reducer',
          id: 0,
          description: 'maybe tomorrow cause oh god I am sleepy'
        }],
        {
          type: 'ADD_ITEM',
          items: [
            {
              title: 'Sleep',
              id: 1,
              description: 'Perchance to dream...'
            }
          ]
      })).toEqual([
        {
          title: 'Add item reducer',
          id: 0,
          description: 'maybe tomorrow cause oh god I am sleepy'
        },
        {
          title: 'Sleep',
          id: 1,
          description: 'Perchance to dream...'
        }
    ])
    
    expect(
     items([{
          title: 'Add item reducer',
          id: 0,
          description: 'maybe tomorrow cause oh god I am sleepy'
        },
        {
          title: 'Sleep',
          id: 1,
          description: 'Perchance to dream...'
        }],
        {
          type: 'ADD_ITEM',
          items: [
            {
              title: 'Make coffee',
              id: 2,
              description: 'it sounds lovely'
            }
          ]
      })).toEqual([
        {
          title: 'Add item reducer',
          id: 0,
          description: 'maybe tomorrow cause oh god I am sleepy'
        },
        {
          title: 'Sleep',
          id: 1,
          description: 'Perchance to dream...'
        },
        {
          title: 'Make coffee',
          id: 2,
          description: 'it sounds lovely'
        }
    ])
  })
})
