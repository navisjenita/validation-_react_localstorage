import React, { Component, useEffect, useState } from 'react'
import "./login.css"
import image from "./assests/1.jpg"
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {

    const [userData, setUserData] = useState([]);
    const [CheckEmail, setCheckEmail] = useState('');
    const [CheckPassword, setCheckPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
       
        const storedData = localStorage.getItem('userdata');

        if (storedData) {
           
            const parsedData = JSON.parse(storedData);
            setUserData(parsedData);
        }
    }, []);
    console.log(userData)

    const handleLogin = () => {
       
        const matchedUser = userData.find((user) => user.useremail === CheckEmail && user.userpassword === CheckPassword);

        if (matchedUser) {
           
            alert('Login successful');
            navigate('/table', { state: { loggedInUser: CheckEmail } })
           
        } else {
           
            alert('Invalid email or password');
            
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div className="body">
                <div className="container">
                    <div className="right-box">
                        <h2 className="right-head">Login</h2>
                        
                        <div className="form-input">


                       

                            <div className="input-group">
                                <div className="span">email</div>
                                <input type="email" name='useremail' className="input-box" placeholder="Enter Your Email ID" value={CheckEmail} onChange={(e) => setCheckEmail(e.target.value)} id='useremail' />
                            </div>

                            <div className="input-group">
                                <div className="span">password</div>
                                <input type="password" name="userpassword" className="input-box" placeholder="Enter Your Password" value={CheckPassword} onChange={(e) => setCheckPassword(e.target.value)} id='userpassword' />
                            </div>

                            <button type="submit">Log in</button>

                        </div>
                        <div className="right-footer">
                            <h4 className="right-footer-para"> Don't have an account? <span className='span70'><Link to='/signup'> Sign Up</Link></span></h4>
                           
                        </div>
                    </div>
                    <div className="left-box">
                        <div className="min-box">
                            <div className="small-box"></div>
                        </div>
                        <div className="div-head">

                            <h2 className="left-text">Let us help you run your freelannce business</h2>

                            <p className="left-para">our registration process is quick and easy, taking no more than 10 minutes to
                                completed</p>


                            <div className="left-footer">
                                <h4 className="left-footer-head">I'm impressed with the result i've seen since staring to use this
                                    product,I being receiving clients and projects in the first week</h4>
                                <div className="left-img">
                                    <div className="left-img-box">
                                        <img src={image} alt="" srcset="" />
                                    </div>
                                    <div className="left-img-content">
                                        <h5 className="left-ig-h5">jomes kim</h5>
                                        <h6 className="left-ig-h6">product designer</h6>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}