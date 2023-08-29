import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const navigate = useNavigate();
  
  const [Email, setEmail] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Password, setPassword] = useState('');
  const [Image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append('Email', Email);
      data.append('FirstName', FirstName);
      data.append('LastName', LastName);
      data.append('Password', Password);
      data.append('Image', Image);

      const res = await axios.post('http://localhost:5000/SignUp', data);
      if (res.data.success) {
        toast.success(res.data.msg);
        navigate('/Login');
      } else {
        toast.error(res.data.msg);
      }
    } catch (error) {
      toast.error('Error while submitting the form.');
    }
  };

  return (
    <div>
      <div className='frombody'>
        <h4>Signup</h4>
        <form onSubmit={handleSubmit}>
          <div className='text'>
            <label htmlFor='Email'> Email : </label>
            <input type='text' name='Email' id='Email' placeholder='Enter your Email' value={Email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <label htmlFor='FirstName'>FirstName : </label>
            <input type='text' name='FirstName' id='FirstName' placeholder='Enter your FirstName'value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='LastName'>LastName : </label>
            <input type='text' name='LastName' id='LastName' placeholder='Enter your LastName' value={LastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='Password'>Password : </label>
            <input type='Password' name='Password' id='Password' placeholder='Enter your Password' value={Password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label htmlFor='Image'> Image : </label>
            <input type='file' name='Image' id='Image' onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <button type='submit'>Signup</button>
          <div className='already-reg'>
            Have You Already Registered <a href='Login'>Login!</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
