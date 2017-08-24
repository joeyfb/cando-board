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
            refs: []
          }],
          {
            type: 'DELETE_ENTITY',
            entities: [
              {
                id: 0,
                refs: []
              }
            ]
          })
        ).toEqual([]);
          
        expect(
          entities([{
            title: 'Done',
            object: 'list',
            id: 0,
            refs: [ 1, 2 ]
          },
          {
            title: 'Do the THING',
            object: 'card',
            id: 1,
            refs: []
          },
          {
            title: 'Do a THING',
            object: 'card',
            id: 2,
            refs: []
          }],
          {
            type: 'DELETE_ENTITY',
            entities: [
              {
                id: 1,
                refs: []
              }
            ]
          })
        ).toEqual([
          {
            title: 'Done',
            object: 'list',
            id: 0,
            refs: [ 2 ]
          },
          {
            title: 'Do a THING',
            object: 'card',
            id: 2,
            refs: []
          }
        ]);
      });
    
    it('should handle create', () =>
      {
        expect(
          entities([],
          {
            type: 'CREATE_ENTITY',
            entities: [
              {
                title: 'Do the RIGHT thing',
                object: 'card',
                id: 0,
                refs: []
              }
            ]
          })
        ).toEqual([
          {
            title: 'Do the RIGHT thing',
            object: 'card',
            id: 0,
            refs: []
          }
        ]);
        
        expect(
          entities([
            {
              title: 'Do the RIGHT thing',
              object: 'card',
              id: 0,
              refs: []
            }
          ],
          {
            type: 'CREATE_ENTITY',
            entities: [
              {
                title: 'On hold',
                object: 'list',
                id: 1,
                refs: [ 0 ]
              }
            ]
          })
        ).toEqual([
          {
            title: 'Do the RIGHT thing',
            object: 'card',
            id: 0,
            refs: []
          },
          {
            title: 'On hold',
            object: 'list',
            id: 1,
            refs: [ 0 ]
          }
        ]);

        expect(
          entities([
            {
              title: 'Game board',
              object: 'board',
              id: 0,
              refs: []
            }
          ],
          {
            type: 'CREATE_ENTITY',
            entities: [
              {
                title: 'Ideas',
                object: 'list',
                id: 1,
                refs: [ ]
              }
            ],
            parentID: 0
          })
        ).toEqual([
          {
            title: 'Game board',
            object: 'board',
            id: 0,
            refs: [ 1 ]
          },
          {
            title: 'Ideas',
            object: 'list',
            id: 1,
            refs: [ ]
          }
        ]);

        expect(
          entities([
            {
              title: 'Business Place',
              object: 'board',
              id: 'a',
              refs: [ 'b' ]
            },
            {
                title: 'Projects',
                object: 'list',
                id: 'b',
                refs: [ ]
            }
          ],
          {
            type: 'CREATE_ENTITY',
            entities: [
              {
                title: 'Leads',
                object: 'list',
                id: 'c',
                refs: [ ]
              }
            ],
            parentID: 'a'
          })
        ).toEqual([
          {
            title: 'Business Place',
            object: 'board',
            id: 'a',
            refs: [ 'b', 'c' ]
          },
          {
            title: 'Projects',
            object: 'list',
            id: 'b',
            refs: [ ]
          },
          {
            title: 'Leads',
            object: 'list',
            id: 'c',
            refs: [ ]
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
            refs: []
          }],
          {
            type: 'UPDATE_ENTITY',
            entities: [
              {
                id: 0,
                title: 'And so and so and so forth',
                refs: []
              }
            ]
          })
        ).toEqual([{
            title: 'And so and so and so forth',
            object: 'card',
            id: 0,
            refs: []
          }]);
        
        expect(
          entities([{
            title: 'Do the RIGHT thing',
            object: 'card',
            id: 0,
            refs: []
          },
          {
            title: 'Something completely different',
            object: 'card',
            id: 1,
            refs: [1]
          }
          ],
          {
            type: 'UPDATE_ENTITY',
            entities: [
              {
                id: 0,
                title: 'And so and so and so forth',
                refs: []
              }
            ]
          })
        ).toEqual([{
            title: 'And so and so and so forth',
            object: 'card',
            id: 0,
            refs: []
          },
          {
            title: 'Something completely different',
            object: 'card',
            id: 1,
            refs: [1]
          }]);
        
        expect(
          entities([{
            title: 'Done',
            object: 'list',
            id: 0,
            refs: [ 2 ]
          },
          {
            title: 'Do the THING',
            object: 'card',
            id: 1,
            refs: []

          },
          {
            title: 'Do a THING',
            object: 'card',
            id: 2,
            refs: []
          }],
          {
            type: 'UPDATE_ENTITY',
            entities: [
              {
                id: 0,
                refs: [ 1 ]
              }
            ]
          })
        ).toEqual([
          { 
            title: 'Done',
            object: 'list',
            id: 0,
            refs: [ 1, 2 ]
          },
          {
            title: 'Do the THING',
            object: 'card',
            id: 1,
            refs: []
          },
          {
            title: 'Do a THING',
            object: 'card',
            id: 2,
            refs: []
          }
        ]);

        expect(
          entities([{
            title: 'Done',
            object: 'list',
            id: 0,
            refs: [ 2 ]
          },
          {
            title: 'Doing',
            object: 'list',
            id: 1,
            refs: []
          },
          {
            title: 'Do a THING',
            object: 'card',
            id: 2,
            refs: []
          }],
          {
            type: 'UPDATE_ENTITY',
            entities: [
              {
                id: 1,
                refs: [ 2 ]
              }
            ]
          })
        ).toEqual([{
            title: 'Done',
            object: 'list',
            id: 0,
            refs: [ ]
          },
          {
            title: 'Doing',
            object: 'list',
            id: 1,
            refs: [ 2 ]
          },
          {
            title: 'Do a THING',
            object: 'card',
            id: 2,
            refs: []
          }
        ]);
      });
  });
