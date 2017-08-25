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
              entities: [
                {
                  id: 1,
                  refs: [2]
                }
              ]
            })
          ).toEqual({
              entities: [
                {
                  id: 1,
                  refs: [2]
                }
              ]
          })
        
        expect(
            moving({
              entities: [
                {
                  id: 4,
                  refs: [2]
                }
              ]
            }, {
              type: 'MOVE_START',
              entities: [
                {
                  id: 2
                }
              ]
            })
          ).toEqual({
              entities: [
                {
                  id: 2
                }
              ]
          })

        expect(
            moving({}, {
              type: 'MOVE_START',
              entities: [
                {
                  id: 9
                }
              ]
            })
          ).toEqual({
              entities: [
                {
                  id: 9
                }
              ]
          })
        
      })
    
    it('should handle MOVE_STOP', () => { 
        expect(
            moving({
              entities: [
                {
                  id: 4,
                  refs: [2]
                }
              ]
            }, {
              type: 'MOVE_STOP',
              stop: 1 
            })
        ).toEqual({
          entities: [
            {
              id: 4,
              refs: [2]
            }
          ],
          stop: 1
        })
        
        expect(
            moving({
              entities: [
                {
                  id: 4
                }
              ]
            }, {
              type: 'MOVE_STOP',
              stop: 5
            })
        ).toEqual({
          entities: [
            {
              id: 4
            }
          ],
          stop: 5
        })
      
      })
  })
