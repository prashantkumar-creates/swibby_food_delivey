import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({ name:"", password:"", email:"", location:"" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/createuser', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        password: credentials.password,
        email: credentials.email,
        location: credentials.location
      })
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert('Enter valid credentials');
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Name
            </label>
            <input
              type='text'
              className='form-control border border-info'
              
              name='name'
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputEmail1' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control border border-info'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              name='email'
              value={credentials.email}
              onChange={onChange}
            />
            <div id='emailHelp' className='form-text'>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control border border-info'
              id='exampleInputPassword1'
              name='password'
              value={credentials.password}
              onChange={onChange}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='exampleInputPassword1' className='form-label'>
              Address
            </label>
            <input
              type='text'
              className='form-control border border-info'
              
              name='location'
              value={credentials.location}
              onChange={onChange}
            />
          </div>

          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
          <Link to='/login' className='btn m-3 btn-success'>
            Already a User
          </Link>
        </form>
      </div>
    </>
  );
}



