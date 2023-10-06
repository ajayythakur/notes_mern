import React, { useEffect, useState } from 'react'
import axios from 'axios';


const NotesComp = () => {

    const [notes,setNotes] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8080/get/notes')
        .then((res)=>setNotes(res.data))
        .catch((err)=> console.log(err));
    },[])

    console.log(notes);
  return (
    <div>
        {
          notes &&  notes.map((data,index)=>{

            return(
                <div key={index}>
                    <div>{data.title}</div>
                    
                    </div>
            )

            })
        }
    </div>
  )
}

export default NotesComp