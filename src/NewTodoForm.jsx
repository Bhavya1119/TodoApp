import { useState } from "react";
export function NewTodoForm({onSubmit})
{
    const [newItem , setnewItem] = useState("");
    //function for submitting todo
    function handleSubmit(e)
    {
        e.preventDefault();
        if(newItem === "") return;
        onSubmit(newItem);
        setnewItem("");
    }
    
   return ( 
   <form  onSubmit = {handleSubmit} className='new-item-form'>
    <div className='new-item'>
        <label htmlFor='item'>NEW ITEM <br/><br/></label> 
        <input
         value = {newItem} 
         onChange = { e => setnewItem(e.target.value)} 
         type='text' id='item'></input>
        <button className='btn'>  Add</button>
    </div>
</form>
)}