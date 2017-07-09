import lists from './lists';

describe('lists reducer', () =>
    {

      it('should handle initial state', () =>
          {
            expect(
                lists(undefined, {})
              ).toEqual([]);
          });

      it('should handle UPDATE_LIST', () =>
          {

            expect(
                lists([
                  {
                    title: 'Old title',
                    id: 'a',
                    cards: [ 'bb' ]
                  }
                ],
                {
                  type: 'UPDATE_LIST',
                  id: 'a',
                  title: 'Updated title'
                }
                )).toEqual([
                {
                  title: 'Updated title',
                  id: 'a',
                  cards: [ 'bb' ]
                }
                ]);

            expect(
                lists([
                  {
                    title: 'Old title',
                    id: 'a',
                    cards: [ 'bb' ]
                  },
                  {
                    title: 'Super market',
                    id: 'e',
                    cards: [ 'cc', 'asdf' ]
                  },
                  {
                    title: 'To be determined',
                    id: 'h',
                    cards: [ 'def', 'xyz' ]
                  }
                ],
                {
                  type: 'UPDATE_LIST',
                  id: 'e',
                  title: 'Yet another updated title'
                }
                )).toEqual([
                  {
                    title: 'Old title',
                    id: 'a',
                    cards: [ 'bb' ]
                  },
                  {
                    title: 'Yet another updated title',
                    id: 'e',
                    cards: [ 'cc', 'asdf' ]
                  },
                  {
                    title: 'To be determined',
                    id: 'h',
                    cards: [ 'def', 'xyz' ]
                  }
                ]);

          });

      it('should handle ADD_LIST', () =>
          {

            expect(
                lists([], {
                  type: 'ADD_LIST',
                  title: 'Done',
                  cards: []
                })).toEqual([
                {
                  title: 'Done',
                  cards: []
                }
                ]);

            expect(
                lists([{
                  title: 'Done',
                  id: 0,
                  cards: []
                }],
                {
                  type: 'ADD_LIST',
                  title: 'Later',
                  id: 1,
                  cards: []
                })).toEqual([
                {
                  title: 'Done',
                  id: 0,
                  cards: []
                },
                {
                  title: 'Later',
                  id: 1,
                  cards: []
                }
                ]);

            expect(
                lists([{
                  title: 'Done',
                  id: 0,
                  cards: []
                },
                {
                  title: 'Later',
                  id: 1,
                  cards: []
                }],
                {
                  type: 'ADD_LIST',
                  title: 'Never ever',
                  id: 2,
                  cards: []
                })).toEqual([
                {
                  title: 'Done',
                  id: 0,
                  cards: []
                },
                {
                  title: 'Later',
                  id: 1,
                  cards: []
                },
                {
                  title: 'Never ever',
                  id: 2,
                  cards: []
                }
                ]);

          });

      it('should handle MOVE_CARD', () =>
          {

            expect(
                lists([
                  {
                    title: 'home',
                    id: 'a',
                    cards: [ '1', '2' ]
                  },
                  {
                    title: 'work',
                    id: 'b',
                    cards: [ '5', '9' ]
                  }
                ],
                {
                  type: 'MOVE_CARD',
                  pos: 0,
                  start: {
                    id: 'a',
                    cards: [ '1' ]
                  },
                  stop: {
                    id: 'b'
                  }
                })
            ).toEqual([
              {
                title: 'home',
                id: 'a',
                cards: [ '2' ]
              },
              {
                title: 'work',
                id: 'b',
                cards: [ '1', '5', '9' ]
              }
            ]);

            expect(
                lists([
                  {
                    title: 'home',
                    id: 'a',
                    cards: [ '1', '2' ]
                  },
                  {
                    title: 'work',
                    id: 'b',
                    cards: [ '5', '9' ]
                  }
                ],
                {
                  type: 'MOVE_CARD',
                  pos: 2,
                  start: {
                    id: 'a',
                    cards: [ '2' ]
                  },
                  stop: {
                    id: 'b'
                  }
                })
            ).toEqual([
              {
                title: 'home',
                id: 'a',
                cards: [ '1' ]
              },
              {
                title: 'work',
                id: 'b',
                cards: [ '5', '9', '2' ]
              }
            ]);

            expect(
                lists([
                  {
                    title: 'home',
                    id: 'a',
                    cards: [ '1', '2' ]
                  },
                  {
                    title: 'work',
                    id: 'b',
                    cards: [ '5', '9', '8' ]
                  },
                  {
                    title: 'gym',
                    id: 'c',
                    cards: [ '11', '15', '19', '20', '50' ]
                  }
                ],
                {
                  type: 'MOVE_CARD',
                  pos: 3,
                  start: {
                    id: 'b',
                    cards: [ '9' ]
                  },
                  stop: {
                    id: 'c'
                  }
                })
            ).toEqual([
              {
                title: 'home',
                id: 'a',
                cards: [ '1', '2' ]
              },
              {
                title: 'work',
                id: 'b',
                cards: [ '5', '8' ]
              },
              {
                title: 'gym',
                id: 'c',
                cards: [ '11', '15', '19', '9', '20', '50' ]
              }
            ]);

            expect(
                lists([
                  {
                    title: 'work',
                    id: 'b',
                    cards: [ '5', '9', '8' ]
                  },
                  {
                    title: 'gym',
                    id: 'c',
                    cards: [ '11', '15', '19', '20', '50' ]
                  }
                ],
                {
                  type: 'MOVE_CARD',
                  pos: 1,
                  start: {
                    id: 'c',
                    cards: [ '20' ]
                  },
                  stop: {
                    id: 'c'
                  }
                })
            ).toEqual([
              {
                title: 'work',
                id: 'b',
                cards: [ '5', '9', '8' ]
              },
              {
                title: 'gym',
                id: 'c',
                cards: [ '11', '20', '15', '19', '50' ]
              }
            ]);

          });

      it('should handle ADD_CARD', () =>
          {

            expect(
                lists([{
                  title: 'Done',
                  id: 0,
                  cards: []
                }],
                {
                  type: 'ADD_CARD',
                  id: 0,
                  cards: [
                  {
                    id: 0
                  }
                  ]
                })).toEqual([
                {
                  title: 'Done',
                  id: 0,
                  cards: [
                    0
                  ]
                }
                ]);

            expect(
                lists([{
                  title: 'Done',
                  id: 0,
                  cards: [
                    0
                  ]
                }],
                {
                  type: 'ADD_CARD',
                  id: 0,
                  cards: [
                  {
                    id: 1
                  }
                  ]
                })).toEqual([
                {
                  title: 'Done',
                  id: 0,
                  cards: [
                    0,
                    1
                  ]
                }
                ]);

            expect(
                lists([{
                  title: 'Doing',
                  id: 0,
                  cards: [
                    0
                  ]
                },
                {
                  title: 'Done',
                  id: 1,
                  cards: []
                }
                ],
                {
                  type: 'ADD_CARD',
                  id: 1,
                  cards: [
                  {
                    id: 0
                  }
                  ]
                })).toEqual([
                {
                  title: 'Doing',
                  id: 0,
                  cards: [
                    0
                  ]
                },
                {
                  title: 'Done',
                  id: 1,
                  cards: [
                    0
                  ]
                }
                ]);

          });

      it('should handle REMOVE_CARD', () =>
          {

            expect(
                lists([{
                  title: 'Done',
                  id: 0,
                  cards: [
                    0
                  ]
                }],
                {
                  type: 'REMOVE_CARD',
                  cards: [
                  {
                    id: 0
                  }
                  ]
                })).toEqual([
                {
                  title: 'Done',
                  id: 0,
                  cards: []
                }
                ]);

            expect(
                lists([{
                  title: 'Doing',
                  id: 0,
                  cards: [
                    0,
                    1
                  ]
                },
                {
                  id: 1,
                  title: 'Done',
                  cards: []
                }
                ],
                {
                  type: 'REMOVE_CARD',
                  id: 0,
                  cards: [
                  {
                    id: 1
                  }
                  ]
                })).toEqual([
                {
                  title: 'Doing',
                  id: 0,
                  cards: [
                    0
                  ]
                },
                {
                  title: 'Done',
                  id: 1,
                  cards: []
                }
                ]);

          });

      it('should handle REMOVE_LIST', () =>
          {

            expect(
                lists([
                  {
                    id: 0,
                    title: 'In',
                    itmes: []
                  }
                ],
                {
                  type: 'REMOVE_LIST',
                  id: 0
                })).toEqual([]);

            expect(
                lists([
                  {
                    id: 0,
                    title: 'In',
                    cards: [
                      0
                    ]
                  },
                  {
                    id: 1,
                    title: 'Out',
                    itmes: []
                  }
                ],
                {
                  type: 'REMOVE_LIST',
                  id: 1
                })).toEqual([
                {
                  id: 0,
                  title: 'In',
                  cards: [
                    0
                  ]
                }
                ]);

          });

    });
