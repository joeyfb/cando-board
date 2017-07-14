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
            id: 0
          }],
          {
            type: 'REMOVE_ENTITY',
            id: 0
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
            id: 1
          },
          {
            title: 'Do a THING',
            object: 'card',
            id: 2
          }],
          {
            type: 'REMOVE_ENTITY',
            id: 1
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
            id: 2
          }
        ]);
      });
  });
