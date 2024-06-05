import React, { Fragment, useState} from 'react'
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan, faSquareCheck, faUnlockKeyhole, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
 

export const TaskCard = (props) => {
  
  const[changer,setchanger] = useState(props.desc);

  const handelclick = ()=>{
    props.remove(props.id)
  }

  const handelcomplete = ()=>{
    props.complete(props.id)
  }

  const handeledit = () =>{
    props.edit(props.id)
  }

  const save =()=>{
    props.save(props.id,changer)
  }

  return(

    <div className = { !props.completeproperty ? 'todo-row' : 'todo-row-comp' } >

        <h4 className = { props.completeproperty ? 'compl' : '' } > { props.time } </h4>
            
            <div >

              { 

               props.isediting ? 
                <Fragment>
                  <textarea 
                  className='editingarea'
                  value={changer} 
                  onChange={e => setchanger(e.target.value)}
                  >
                  {changer}
                  </textarea>
                  <button type='submit' className='savechanger' onClick={save}>SAVE</button>
                </Fragment>
               :

              (<h3 
                style={{marginTop:"5px"}}
                className = { props.completeproperty ? 'compl': '' } >
                 { props.desc } 
              </h3>)
              }
            </div>

            <a href='#/ds' className='faw'onClick={handelclick} >

              <FontAwesomeIcon 
               style={{fontSize: "30px",color:"280107", position: 'absolute', top:"5px"}} 
               icon={faTrashCan}
               /> 

            </a>
            {

            !props.isediting ?
            <a href = '#/ds' className = 'chck' onClick = { handelcomplete }>

                <FontAwesomeIcon 
                 style={{fontSize: "30px", color:"280107"}}
                 icon={ !props.completeproperty ? faSquareCheck: faUnlockKeyhole }
                 />

            </a>:

            <></>

            }

            {

              !props.completeproperty ?
              (<a href='#/ds' className='edit-icon' onClick={ handeledit }>

                <FontAwesomeIcon style={{fontSize: "30px", color:"280107"}} icon={faPenToSquare}/>

            </a>) :
            <></>

            } 
    </div>

  )
}


