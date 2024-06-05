import { TODO_ACTIONS } from './Todoactions'

export const INITIAL_TODO=
{
  items: [],
}

export const PostTodo =(state,action)=>{
  switch(action.type){

    case TODO_ACTIONS.ADD_TODO:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case TODO_ACTIONS.EDIT_TODO:
      return{
        items:[...state.items.map(e =>(e.id ===action.payload ) ? {...e ,toggleedit:!e.toggleedit} :e)]
      }
      
    case TODO_ACTIONS.SAVE_CHANGES:
      return{
        items:[
              ...state.items.map(e =>
             (e.id ===action.payload.idendificator ) ?
             {...e ,description:action.payload.changer, toggleedit:!e.toggleedit}
             :e)
          ]
      }

    case TODO_ACTIONS.REMOVE_TODO:
      return({
              items:[...state.items.filter(e => e.id !==action.payload)]
            })

    case TODO_ACTIONS.COMPLETE:
      return{
          items:[...state.items.map(e =>(e.id ===action.payload ) ? {...e ,isCompleted:!e.isCompleted} :e)]
      }

    case TODO_ACTIONS.CLEAR_TODO:
      return({
        items:[]
      })

    case TODO_ACTIONS.TEST:
      console.log("this is test condition for application")
    break
    
    default:
      return state
  }
}


