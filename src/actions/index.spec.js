import * as actions from './index';

const zeroIds = (obj) =>
{

  obj['id'] = 0;

  if (obj['cards'])
  {
    obj['cards'] = obj.cards.map( (i) =>
        {
          i.id = 0;

          return i;
        });
  }

  return obj;
};

describe('entity actions', () =>
  {
    
    it('removeEntity should create REMOVE_LIST action', () =>
        {
          expect(
              actions.removeEntity(1)
            ).toEqual({
              type: 'REMOVE_LIST',
              id: 1
          });
        });
    
    it('removeEntity should create REMOVE_CARD action', () =>
        {
          expect(
              actions.removeEntity(undefined, 'b')
            ).toEqual({
              type: 'REMOVE_CARD',
              cards: [
                {
                  id: 'b'
                }
              ]
          });
        });

  it('updateEntity should create UPDATE_ACTION action', () =>
    {
      expect(
          actions.updateEntity({
            id: 1,
            title : 'thingy'
          })
        ).toEqual({
          type: 'UPDATE_ENTITY',
          entities: [
            {
              id: 1,
              title : 'thingy'
            }
          ]
      });

      expect(
          actions.updateEntity({
            id: 3,
            title : 'create specs',
            object: 'card'
          })
        ).toEqual({
          type: 'UPDATE_ENTITY',
          entities: [
            {
              id: 3,
              title : 'create specs',
              object: 'card'
            }
          ]
      });
    });
  
  it('deleteEntity should create DELETE_ACTION action', () =>
    {
      expect(
          actions.deleteEntity(1)
        ).toEqual({
            type: 'DELETE_ENTITY',
            entities: [
              {
                id: 1
              }
            ]
      });
      
      expect(
          actions.deleteEntity(2)
        ).toEqual({
            type: 'DELETE_ENTITY',
            entities: [
              {
                id: 2
              }
            ]
      });
    });
  
  it('createEntity should create CREATE_ACTION action', () =>
    {
      expect(
          actions.createEntity({
              id: 1,
              title: "Meet Doctor Who",
              object: 'card',
              refs: [ 0 ]
          })
        ).toEqual({
            type: 'CREATE_ENTITY',
            entities: [
              {
                id: 1,
                title: "Meet Doctor Who",
                object: 'card',
                refs: [ 0 ]
              }
            ]
      });
      
      expect(
          actions.deleteEntity(2)
        ).toEqual({
            type: 'DELETE_ENTITY',
            entities: [
              {
                id: 2
              }
            ]
      });
    });
  
  });

describe('list actions', () =>
  {

  it('updateList should create UPDATE_LIST action', ()=>
      {

        expect(
            actions.updateList('a', 'My title')
          ).toEqual({
            type: 'UPDATE_LIST',
            id: 'a',
            title: 'My title'
        });

      });

  it('addList should create ADD_LIST action', () => {

    expect(
        zeroIds(actions.addList('To Do'))
      ).toEqual({
        type: 'ADD_LIST',
        id: 0,
        title: 'To Do',
        cards: []
    });

  });

  it('addCard should create ADD_CARD action', () => {

    expect(
        zeroIds( 
          actions.addCard(
            0,
            'Cover untested case',
            'for add card'
            )
          )
      ).toEqual({
        type: 'ADD_CARD',
        id: 0,
        cards: [
        {
          id: 0,
          title: 'Cover untested case',
          description: 'for add card'
        }
        ]
    });

  });

  it('removeCard should create REMOVE_CARD action', () => {

    expect(actions.removeCard(0)
        ).toEqual({
      type: 'REMOVE_CARD',
      cards: [
      {
        id: 0
      }
      ]
    });

  });

  it('removeList should create REMOVE_LIST action', () => {

    expect(actions.removeList(0,0)
        ).toEqual({
      type: 'REMOVE_LIST',
      id: 0,
    });

  });

  it('moveStart should create MOVE_START action', () => {

    expect(actions.moveStart(1, 2)
        ).toEqual({
      type: 'MOVE_START',
      lists: [
      {
        id: 1,
        cards: [2]
      }
      ]
    });

    expect(actions.moveStart(1)
        ).toEqual({
      type: 'MOVE_START',
      lists: [
      {
        id: 1
      }
      ]
    });

  });

  it('moveStop should create MOVE_STOP action', () => {

    expect(actions.moveStop()
        ).toEqual({
      type: 'MOVE_STOP',
      status: 'fail'
    });

    expect(actions.moveStop(1,2)
        ).toEqual({
      type: 'MOVE_STOP',
      pos: 1,
      status: 'success',
      lists: [
      {
        id: 2
      }
      ]
    });

    expect(actions.moveStop(0)
        ).toEqual({
      type: 'MOVE_STOP',
      status: 'success',
      pos: 0
    });
  });

  it('moveClear should create MOVE_CLEAR action', () => {

    expect(actions.moveClear()
        ).toEqual({
      type: 'MOVE_CLEAR'
    });

  });

  it('moveCard should create MOVE_CARD action', () =>
    {

      expect(actions.moveCard(0, 1, [2], 2)
          ).toEqual({
        type: 'MOVE_CARD',
        pos: 0,
        start: {
          id: 1,
          cards: [ 2 ]
        },
        stop: {
          id: 2
        }
      });

    });
  
});
