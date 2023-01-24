import React, { useState } from "react";
import Header from "./Component/Header"
import Footer from "./Component/Footer";
import CreateNote from "./Component/CreateNote";
import Note from "./Component/Note";


const App =()=>{

  const [addItem,setAddItem]=useState([]);   //addItem is an array so create an empty array

  const addNote=(note)=>{
    //alert("i am ansu")
    setAddItem((prevData)=>{
      return[...prevData,note]   //return the data
    })
    console.log(note);
  }
  const onDelete=(id)=>{
    setAddItem((oldData)=>
    oldData.filter((currentdata,index)=>{
      return index!==id;
    })
    )
  }
  return (
    <>
    <Header/>
    
    <CreateNote
     passNote={addNote}
    
    />

   { addItem.map((val,index)=>{
      return <Note key={index}
      id={index}
      title={val.title}
      content={val.content}
      deleteItem={onDelete}
      />
    })}
    <Footer/>
    </>
  )
}
export default App;