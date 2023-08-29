import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Navbar from './Navbar'
import Headertoken from '../helper/Useheader';

function Home() {
  const headers = Headertoken();
  const token = localStorage.getItem("token");
  const decodeToken = jwt_decode(token);
  const userId = decodeToken.token.userId;


  const [data, setData] = useState([]);
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [Task, setTask] = useState('')

  const AddTask = async ({ resetForm }) => {
    try {
      const res = await axios.post('http://localhost:5000/task-add', {
        FirstName: FirstName,
        LastName: LastName,
        Task: Task,

      }, headers)
      if (res.status === 200) {
        GetTask();
        setData({ FirstName: "", LastName: "", Task: "" })
        alert(res.data.msg);
      } else {
        alert(res.data.msg);
      }


    } catch (error) {
      console.error(error)

    }
  }


  const GetTask = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/get-Task/${userId}`, headers);
      setData(res.data.getall);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetTask();
  }, []);


  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='FormForTask'>
        <div>
          <label>FirstName</label>
          <input type="text" value={FirstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" />
        </div>
        <div>
          <label>LastName</label>
          <input type="text" value={LastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" />
        </div>
        <div>
          <label>Task</label>
          <input type="text" value={Task} onChange={(e) => setTask(e.target.value)} placeholder="Enter Task" />
        </div>
        <button type='submit' onClick={AddTask}>Submit</button>

      </div>

      {data.length > 0 && data.map((item) => {
        return (
          <>
            <h5>FirstName : LastName : Task</h5>
            <div>
              <p>{item.FirstName} : {item.LastName} : {item.Task}</p>
            </div>
          </>


        )
      })}

    </>
  )
}

export default Home