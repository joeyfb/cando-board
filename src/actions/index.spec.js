import * as actions from './index';

describe('entity actions', () =>
  {

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
      
      expect(
          actions.updateEntity({
            id: 3,
            title : 'create specs',
            object: 'card'
          }, 2)
        ).toEqual({
          type: 'UPDATE_ENTITY',
          position: 2,
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
      const e = actions.createEntity(
          {
            title: "Meet Doctor Who",
            object: 'card',
            refs: [ 'abc-123' ]
          },
          'b'
      );
      let id = e.entities[0].id;

      if ( ! id )
        id = 'no ID given';

      expect( e )
        .toEqual(
          {
            type: 'CREATE_ENTITY',
            entities: [
              {
                id,
                title: "Meet Doctor Who",
                object: 'card',
                refs: [ 'abc-123' ]
              }
            ],
            parentID: 'b'
          }
        );
    
    });
  
  });

describe('move actions', () =>
  {

  it('moveStart should create MOVE_START action', () => {

    expect(actions.moveStart(1, 2)
        ).toEqual({
      type: 'MOVE_START',
      entities: [
        {
          id: 1,
          refs: [2]
        }
      ]
    });

    expect(actions.moveStart(1)
        ).toEqual({
      type: 'MOVE_START',
      entities: [
        {
          id: 1
        }
      ]
    });

  });

  it('moveStop should create MOVE_STOP action', () => {

    expect(actions.moveStop()
        ).toEqual({
      type: 'MOVE_STOP'
    });

    expect(actions.moveStop(1,2)
        ).toEqual({
      type: 'MOVE_STOP',
      pos: 1,
      stop: 2
    });

    expect(actions.moveStop(0)
        ).toEqual({
      type: 'MOVE_STOP',
      pos: 0
    });
  });

  it('moveClear should create MOVE_CLEAR action', () => {

    expect(actions.moveClear()
        ).toEqual({
      type: 'MOVE_CLEAR'
    });

  });

});
