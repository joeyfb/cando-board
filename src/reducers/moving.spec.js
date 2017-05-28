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
    
    it('should handle MOVE_STOP fail', () =>
      {
      
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
              status: 'fail'
            })
          ).toEqual({})
        
        expect(
            moving({
              lists: [
                {
                  id: 4
                }
              ]
            }, {
              type: 'MOVE_STOP',
              status: 'fail'
            })
          ).toEqual({})
      
      })

    it('should handle MOVE_STOP success', () =>
      {
      
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
              status: 'success'
            })
          ).toEqual({})
        
        expect(
            moving({
              id: 4,
              prop: 'list'
            }, {
              type: 'MOVE_STOP',
              status: 'success'
            })
          ).toEqual({})
      
      })
    
  })
