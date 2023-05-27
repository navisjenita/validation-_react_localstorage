import react, { useState, useEffect } from 'react';
import React from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import "./login.css"

export default function Table() {


  const [formvalues, setFormvalues] = useState([]);
  const location = useLocation();
  const loggedInUser = location.state?.loggedInUser;
 

  useEffect(() => {

    const storedData = localStorage.getItem('userdata');
    const parsedData = storedData ? JSON.parse(storedData) : [];
    setFormvalues(parsedData);

  }, []);
  const navigate = useNavigate();
  const formlogout = () =>{
    navigate("/");
  }


  return (
    <>
    <div className='table1' >
      <table >
        <thead>
          <tr>
            {/* <th>no</th> */}
            <th>User Name</th>
            <th>Email ID</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {
            formvalues.map((value, index) => (

              <tr key={index} id={value.useremail == loggedInUser ? "highlighted" : ""}>
                {/* <td>{index}</td> */}
                <td>{value.username}</td>
                <td>{value.useremail}</td>
                <td>{value.userpassword}</td>
              </tr>
            ))

          }
        </tbody>
      </table>
    <button className='button50' onClick={formlogout}>logout</button>
    </div>
    
    </>
  );
}