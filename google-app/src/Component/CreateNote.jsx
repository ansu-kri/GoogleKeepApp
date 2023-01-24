import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote =(props)=>{

    const [expand,setExpand]=useState(false)

    const [note,setNote]=useState({
        title:"", //make a object
        content:"",
    })   //store the data

    const InputEvent=(event)=>{

        // const value=event.target.value;  
        // const name=event.target.name;

        const {name,value}=event.target;    //object destructuring

        setNote((prevData)=>{        //pass an argument
          return {
            ...prevData,  //spread operator
            [name]:value,
          };
        })    
        console.log(note)
    }

    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        })
    }
    const expandIt=()=>{
        setExpand(true)
    }      //for small div text

    const btoNormal=()=>{
        setExpand(false)
    }

    return(
        <>
        <div className="main_note" onDoubleClick={btoNormal}>
          <form>
            { expand?
            <input type="text" name="title" value={note.title} onChange={InputEvent} 
            placeholder="Title" autoComplete="off" />:null} 


            <textarea rows="" column=""  name="content" value={note.content} 
            onChange={InputEvent}  placeholder="Write note..."  onClick={expandIt}/>
            {expand?
            <Button onClick={addEvent}>
             <AddIcon className="plus_sign" />
            </Button>:null}
          </form>
        
        </div>
        </>
    )
};
export default CreateNote;