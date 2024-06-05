import React, { Fragment, useState, useReducer } from 'react'
import { TODO_ACTIONS } from './Todoactions.js'
import { INITIAL_TODO,PostTodo } from './PostTodo.jsx'
import { TaskCard } from './TaskCard.jsx'
import { v4  } from 'uuid';
import './index.css'


const TodoForm = () => {

  const date = new Date();

  const datecal = date.toLocaleDateString()

  const [state, dispatch] = useReducer(PostTodo, INITIAL_TODO)

  const [task, settask] = useState('');
 
  function GetdataAndRemove(val) {
    dispatch({type: TODO_ACTIONS.REMOVE_TODO , payload:val})
  }

  const clear= () => {
    dispatch({type: TODO_ACTIONS.CLEAR_TODO})
  }

  const getDataoncmplete = (idval) => {
    dispatch({type:TODO_ACTIONS.COMPLETE, payload: idval})
  }

  const editmode = (editid,editval) => {
    dispatch({type:TODO_ACTIONS.EDIT_TODO, payload: editid})
  }
  const save = (saveid,savevale) => {
    dispatch({type:TODO_ACTIONS.SAVE_CHANGES, payload:{idendificator : saveid, changer: savevale}})
  }
  
  function handelsubmit(e){
    e.preventDefault();
    const uvvidv4 = v4();
    const newItem = { time:datecal, description:task, isCompleted:false, id:uvvidv4, toggleedit: false};
    dispatch({type:TODO_ACTIONS.ADD_TODO, payload: newItem})
    settask('');
  }

  return (
    <div className='container'>
      <div className='counter'>
        <p className='pi'>
        Current Todo: {state.items.length}
        </p>
      </div>
      <form 

      onSubmit={(e)=>{
        handelsubmit(e)
      }}

      style={{
        display: 'flex',
        flexDirection:'row',
        margin:'0px',
      }}>

        <textarea 
          value={task}
          onChange={(e) =>{
          settask(e.target.value)
        }}
           maxLength={70} 
          >
        </textarea>

        <button type='submit' className='btn'> ADD TASK </button>

        <button type='reset' onClick={clear} className='btn' > Clear List</button>
      
      </form> 
      
      
      <div>
        {  
        state.items.map(item => 
          (<Fragment key={item.id}>
              <TaskCard
                key={item.id}
                complete={getDataoncmplete}
                remove ={GetdataAndRemove} 
                time={item.time} 
                desc = {item.description} 
                id = {item.id} 
                state={state}
                completeproperty ={item.isCompleted}
                edit = {editmode}
                isediting = {item.toggleedit}
                save={save}
                >
                </TaskCard> 
            </Fragment>
          )
          ) 
        }
      </div>
  </div>
  )
}
export default TodoForm;
