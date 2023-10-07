import React, { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/NotesPage.css';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    // console.log(name,email,password,contact)
    e.preventDefault();
    if (name.length === 0) {
      return alert("Name Field can't be empty")
    }
    if (!email.includes('@')) {
      return alert('Invalid Email Address');
    }
    if (password.length < 5) {
      return alert("Length of password should not be less then 5 characters. ")
    }
    if (contact.length < 10) {
      return alert("Please enter valid contact no.")
    }
    const details = await axios.post('http://localhost:8080/register', {
      name, email, password, contact
    })
    if (details) {
      alert("User Registered Succesfully");
      navigate('/login');
    }
  }
  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'right', margin: '5px' }}>
        Already have an account ? <MDBBtn className='btn-success flex-lg-row'>
          <Link to='/login' className='link' >Login</Link>
        </MDBBtn>
      </div>

      <MDBContainer fluid>
        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg' />

                  <MDBInput label='Your Name' required id='form1' type='text' className='w-100' value={name} onChange={(e) => setName(e.target.value)} />

                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg' />
                  <MDBInput label='Your Email' id='form2' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg' />
                  <MDBInput label='Password' id='form3' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="mobile-alt me-3" size='lg' />
                  <MDBInput label='Contact Number' id='form4' type='password' value={contact} onChange={(e) => setContact(e.target.value)} />
                </div>

                <MDBBtn className='mb-4' size='lg' onClick={submitHandler}>Register</MDBBtn>

              </MDBCol>

              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />


              </MDBCol>



            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>

    </div>
  )
}

export default SignUp