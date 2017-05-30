import moving from './moving'

describe('moving reducer', () =>
  {

    it('should handle initial state', () =>
      {
      
        expect(
            moving(undefined, {})
          ).toEqual({})
      
      })

    it('should handle MOVE_START', () =>
      {
      
        expect(
            moving({}, {
              type: 'MOVE_START',
              lists: [
                {
                  id: 1,
                  cards: [2]
                }
              ]
            })
          ).toEqual({
              lists: [
                {
                  id: 1,
                  cards: [2]
                }
              ]
          })
        
        expect(
            moving({
              lists: [
                {
                  id: 4,
                  cards: [2]
                }
              ]
            }, {
              type: 'MOVE_START',
              lists: [
                {
                  id: 2
                }
              ]
            })
          ).toEqual({
              lists: [
                {
                  id: 2
                }
              ]
          })

        expect(
            moving({}, {
              type: 'MOVE_START',
              lists: [
                {
                  id: 9
                }
              ]
            })
          ).toEqual({
              lists: [
                {
                  id: 9
                }
              ]
          })
        
      })
    
    it('should handle MOVE_STOP', () => { 
        expect(
            moving({
              lists: [
                {
                  id: 4,
                  cards: [2]
                }
              ]
            }, {
              type: 'MOVE_STOP',
              listId: 1 
            })
        ).toEqual({
          lists: [
            {
              id: 4,
              cards: [2]
            }
          ],
          stop: { id: 1 }
        })
        
        expect(
            moving({
              lists: [
                {
                  id: 4
                }
              ]
            }, {
              type: 'MOVE_STOP',
              listId: 5
            })
        ).toEqual({
          lists: [
            {
              id: 4
            }
          ],
          stop: { id: 5 }
        })
      
      })
  })
