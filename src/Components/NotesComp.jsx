import React, { useEffect, useState } from 'react'
import '../CSS/NotesPage.css';
import axios from 'axios';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../Context/auth';


const NotesComp = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [notes, setNotes] = useState([]);
  const [dependency, setDependency] = useState(0)
  // eslint-disable-next-line
  const [auth, setAuth] = useAuth();
  // eslint-disable-next-line
  const navigate = useNavigate();

  const author = auth.email;
  console.log(author)

  const submit = async () => {
    const noteData = await axios.post('http://localhost:8080/note', {
      title, description, author
    })
    if (noteData) {
      setDependency(dependency + 1);
      return alert("Note Added");
    }
  }

  const deleteNote = (id) => {
    const noteId = id;
    const deleteNote = axios.patch(`http://localhost:8080/delete/${noteId}`);
    if (deleteNote) {
      setDependency(dependency - 1);
      return alert(`Note Deleted`);
    }
    // console.log('dlt event called')
    // console.log(noteId)
  }


  useEffect(() => {
    axios.get('http://localhost:8080/get/notes')
      .then((res) => setNotes(res.data))
      .catch((err) => console.log(err));

    // console.log(notes);
    // console.log('useEffect runs')
  }, [dependency])

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    });
    localStorage.removeItem("auth");
    console.log("User logout succesfully");
  }
  return (
    <div>
      {
        auth?.token ? <>
          <div style={{ display: 'flex', justifyContent: 'right', margin: '5px', columnGap: '5px' }}>
            <MDBBtn className='btn-black'>{auth.email} </MDBBtn>
            <MDBBtn className='btn-danger' onClick={handleLogout}>
              <Link to='/' className='link'>Logout</Link>
            </MDBBtn>
          </div>
        </> : ""
      }
      {
        auth?.token ? <>
          <div className='add-task'>
            <input className='inputs' type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input className='inputs' value={description} placeholder='Description' onChange={(e) => setDescription(e.target.value)} />
            <MDBBtn className='btn-success fa-add' onClick={submit}>
              Add task
            </MDBBtn>
          </div>

          <div className='note-container'>
            {
              // .filter((data) => data.author === `${author}`)
              notes && notes.filter((data) => data.author === `${author}`).map((data, index) => {

                return (
                  <div>
                    <div key={index} className='note-card'>
                      <div className='rows'>{data.title}</div>
                      <div className='rows'>{data.description}</div>
                      <div className='note-button'>
                        <div onClick={() => deleteNote(data._id)}><span class="material-symbols-outlined">delete</span></div>
                        <div >
                          <Link style={{ display: 'inline' }} to='/update/note' state={data}>
                            <span class="material-symbols-outlined">update</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )

              })
            }
          </div>
        </> : 'Please login first'}
    </div>
  )
}

export default NotesComp