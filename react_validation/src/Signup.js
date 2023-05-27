
import { Link, useNavigate} from 'react-router-dom';
import React,{ useState, useEffect} from 'react';
import Login from './login';

export default function Signup() {

    const inputvalue={
        username:"",
        useremail:"",
        userpassword:""
     }

     const [formvalues,setFormvalues] = useState(inputvalue);
     const [formErrors,setFormErrors] = useState({});
     const [isSubmit, setIsSubmit] = useState(false);

const handlechange=(e)=>{
const {name,value}=e.target;
setFormvalues({...formvalues,[name]:value});
console.log(formvalues);
};

const navigate=useNavigate()

const handlesubmit=(e)=>{
    e.preventDefault();
    setFormErrors(validate(formvalues));
    setIsSubmit(true);

    const storeData =localStorage.getItem("userdata");
    let paresdData=storeData ? JSON.parse(storeData): []
    paresdData.push(formvalues); 

    localStorage.setItem('userdata', JSON.stringify(paresdData));
     navigate("/")


};
useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formvalues);
    }
  },
   [formErrors, formvalues,isSubmit ]);

const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    
    if(!values.username){
        errors.username="name is required "
    }
    if (!values.useremail) {
      errors.useremail   = "Email is required!";
    } else if (!regex.test(values.useremail)) {
      errors.useremail = "This is not a valid email format!";
    }
    if (!values.userpassword) {
      errors.userpassword = "Password is required";
    } else if (values.userpassword.length < 4) {
      errors.userpassword= "Password must be more than 4 characters";
    } else if (values.userpassword.length > 10) {
      errors.userpassword = "Password cannot exceed more than 10 characters";
    }
//    window.location.reload();
  
  return errors;

};
    
    return (
        <>
            <div className="body">
                <div className="container">
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
                                {/* <div className="left-img">
                                    <div className="left-img-box">
                                        <img src={image} alt="" srcset="" />
                                    </div>
                                    <div className="left-img-content">
                                        <h5 className="left-ig-h5">jomes kim</h5>
                                        <h6 className="left-ig-h6">product designer</h6>
                                    </div>

                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="right-box">
                        <h2 className="right-head">Get Started</h2>
                        <h5 className="right-head-footer">create your account now </h5> 
                        <div className="form-input">
                            {/* <pre>{json.stringify(formvalues,undefined,2)}</pre> */}
                            <form action="" onSubmit={handlesubmit}>

                                <div className="input-group">
                                    <div className="span">full name</div>
                                    <input type="text" className="input-box" id="username" name='username' placeholder="Enter Your Full Name" value={formvalues.username} onChange={handlechange}/>
                                         {formErrors.username && <p> 
                                         {formErrors.username} </p>}
                                </div>

                                <div className="input-group">
                                    <div className="span">email</div>
                                    <input type="text" className="input-box" id='email'  name='useremail' placeholder="Enter Your Email ID" value={formvalues.useremail} onChange={handlechange}/>
                                    {formErrors.useremail && <p> 
                                        {formErrors.useremail} </p>}
                                </div>

                                <div className="input-group">
                                    <div className="span">password</div>
                                    <input type="password" className="input-box" id='password' name='userpassword' placeholder="Enter Your Password" value={formvalues.userpassword}  onChange={handlechange}/>
                                    {formErrors.userpassword && <p> 
                                        {formErrors.userpassword} </p>}
                                </div>

                                <button type="submit"  >Sign up</button>
                            </form>
                        </div>
                        <div className="right-footer">
                            <h4 className="right-footer-para"> Don't have an account?<span className='span70'><Link to='/'>Login</Link></span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
                            
                            }                            