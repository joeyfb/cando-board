import entities from './entities';

describe('entities reducer', () =>
  {
    it('should handle initial state', () =>
      {
        expect(
            entities(undefined, {})
        ).toEqual([]);
      });

    it('should handle delete', () =>
      {
        expect(
          entities([{
            title: 'Do the RIGHT thing',
            object: 'card',
            id: 0,
            refs: {}

          }],
          {
            type: 'REMOVE_ENTITY',
            id: 0,
            refs: {}

          })
        ).toEqual([]);
          
        expect(
          entities([{
            title: 'Done',
            object: 'list',
            id: 0,
            refs: {
              cards: [ 1, 2 ]
            }
          },
          {
            title: 'Do the THING',
            object: 'card',
            id: 1,
            refs: {}

          },
          {
            title: 'Do a THING',
            object: 'card',
            id: 2,
            refs: {}

          }],
          {
            type: 'REMOVE_ENTITY',
            id: 1,
            refs: {}

          })
        ).toEqual([
          {
            title: 'Done',
            object: 'list',
            id: 0,
            refs: {
              cards: [ 2 ]
            }
          },
          {
            title: 'Do a THING',
            object: 'card',
            id: 2,
            refs: {}
          }
        ]);
      });

    it('should handle update', () =>
      {
        expect(
          entities([{
            title: 'Do the RIGHT thing',
            object: 'card',
            id: 0,
            refs: {}
          }],
          {
            type: 'UPDATE_ENTITY',
            id: 0,
            update: {
              title: 'And so and so and so forth',
            },
            refs: {}
          })
        ).toEqual([{
            title: 'And so and so and so forth',
            object: 'card',
            id: 0,
            refs: {}
          }]);
        
        expect(
          entities([{
            title: 'Done',
            object: 'list',
            id: 0,
            refs: {
              cards: [ 2 ]
            }
          },
          {
            title: 'Do the THING',
            object: 'card',
            id: 1,
            refs: {}

          },
          {
            title: 'Do a THING',
            object: 'card',
            id: 2,
            refs: {}

          }],
          {
            type: 'UPDATE_ENTITY',
            id: 0,
            update: {
              refs: {
                cards: [ 1 ]
              }
            }
          })
        ).toEqual([
          { 
            title: 'Done',
            object: 'list',
            id: 0,
            refs: {
              cards: [ 1, 2 ]
            }
          },
          {
            title: 'Do the THING',
            object: 'card',
            id: 1,
            refs: {}

          },
          {
            title: 'Do a THING',
            object: 'card',
            id: 2,
            refs: {}
          }
        ]);

      });
  });
