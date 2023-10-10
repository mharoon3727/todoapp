import React from 'react'

function Todolist(props) {
  return (
    <>
    <li className="list-item">
        
        {props.item}
        <button className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}> </i>
        </button>
    </li></>
    
  )
}
export default Todolist