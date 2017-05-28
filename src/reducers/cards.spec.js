import cards from './cards'

describe('cards reducer', () =>
{
  it('should handle initial state', () =>
  {
    expect(
        cards(undefined, {})
    ).toEqual([])
  })


  it('should handle ADD_CARD', () =>
  {
    expect(
        cards([], {
          type: 'ADD_CARD',
          cards: [
            {
              title: 'Add card reducer',
              id: 0,
              description: 'maybe tomorrow cause oh god I am sleepy'
            }
          ]
        })
    ).toEqual([{
          title: 'Add card reducer',
          id: 0,
          description: 'maybe tomorrow cause oh god I am sleepy'
    }])

    expect(
     cards([{
          title: 'Add card reducer',
          id: 0,
          description: 'maybe tomorrow cause oh god I am sleepy'
        }],
        {
          type: 'ADD_CARD',
          cards: [
            {
              title: 'Sleep',
              id: 1,
              description: 'Perchance to dream...'
            }
          ]
      })).toEqual([
        {
          title: 'Add card reducer',
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
     cards([{
          title: 'Add card reducer',
          id: 0,
          description: 'maybe tomorrow cause oh god I am sleepy'
        },
        {
          title: 'Sleep',
          id: 1,
          description: 'Perchance to dream...'
        }],
        {
          type: 'ADD_CARD',
          cards: [
            {
              title: 'Make coffee',
              id: 2,
              description: 'it sounds lovely'
            }
          ]
      })).toEqual([
        {
          title: 'Add card reducer',
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
  
  it('should handle REMOVE_CARD', () =>
  {
    expect(
        cards([{
          title: 'Add card reducer',
          id: 0,
          description: 'maybe tomorrow cause oh god I am sleepy'
      }], {
          type: 'REMOVE_CARD',
          cards: [
            {
              id: 0
            }
          ]
        })
    ).toEqual([])

    expect(
        cards([{
          title: 'Add card reducer',
          id: 0,
          description: 'maybe tomorrow cause oh god I am sleepy'
      },
      {
          title: 'Do something else',
          id: 1,
          description: 'Something I guess'
      }
        ], {
          type: 'REMOVE_CARD',
          cards: [
            {
              id: 0
            }
          ]
        })
    ).toEqual([
      {
          title: 'Do something else',
          id: 1,
          description: 'Something I guess'
      }
    ])
  })

})
