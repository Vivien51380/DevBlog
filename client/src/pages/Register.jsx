import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
  })

  const [err, setError] = useState(null)

  const handleChange = e => {
   setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
  
    axios.post("/auth/register", inputs).then((res) => {
      console.log(res.data);
    }).catch(err => {
      console.log(err)
      setError(err.response.data.message);
    })  
  }

  return (
    <div className='auth'>
      <h1>Connexion</h1>
      <form>
        <input required type="text" placeholder='username' name='username' onChange={handleChange} />
        <input required type="text" placeholder='email' name='email' onChange={handleChange} />
        <input required type="password" placeholder='password' name='password' onChange={handleChange} />
        <button onClick={handleSubmit} >Register</button>
        {err && <span style={{color: "red"}}>{err}</span>}
        <span>Do you have an account? <Link to="/login">Login</Link> </span>
      </form>
    </div>
  )
};

export default Register;
