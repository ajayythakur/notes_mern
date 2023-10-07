import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { MDBBtn } from 'mdb-react-ui-kit';
import axios from 'axios';
import "../CSS/NotesPage.css";

const UpdateNote = () => {
  const location = useLocation();
  const { _id, title, description } = location.state;
  const [newTitle, setNewtitle] = useState(title);
  const [newDes, setNewdes] = useState(description);

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    console.log(newTitle, newDes);
    const updateNote = await axios.put(`http://localhost:8080/update/note/${_id}/${newTitle}/${newDes}`);
    if (updateNote) {
      alert("Node Updated");
      // console.log(updateNote);
      navigate("/get/notes")
    }
  }

  // console.log(_id,title);
  return (
    <div className='add-task update'>
      <input className='inputs' type='text' placeholder='Title' value={newTitle} onChange={(e) => setNewtitle(e.target.value)} />
      <input className='inputs' value={newDes} onChange={(e) => setNewdes(e.target.value)} />
      <MDBBtn className='btn-success fa-arrow-right' color='secondary' onClick={submit}>
        Update
      </MDBBtn>
    </div>
  )
}

export default UpdateNote