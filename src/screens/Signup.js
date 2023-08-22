import React, { useState } from 'react'
import {Link} from 'react-router-dom'
export default function Signup() {
  const [credentials,setcredentials] = useState({name:"",email:"",password:"",geolocation:""})
  const [address, setAddress] = useState("");
  const handleSubmit= async(e)=>{
    e.preventDefault();
    const response=await fetch("http://localhost:5000/api/createuser",{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
    });
    const json=await response.json()
    console.log(json);
    if(!json.success){
      alert("Enter valid credentials")
    }

  }
  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }
  const handleClick = () => {
    // Code to fetch the current location and update the geolocation state.
    // For example:
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setcredentials({ ...credentials, geolocation: `${latitude},${longitude}` });
    });
  };
  
    return (
        <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>

        <div className='container' >
          <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
            <div className="m-3 ">
              <label htmlFor="name" className="form-label white-text" >Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" aria-describedby="emailHelp" name='name' value={credentials.name} onChange={onChange}/>
            </div>
            <div className="m-3">
              <label htmlFor="email" className="form-label white-text">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email-address" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
            </div>
            <div className="m-3">
              <label htmlFor="address" className="form-label white-text">Address</label>
              <fieldset>
              <input type="text" className="form-control" id="address" name='address' placeholder='"Click below for fetching address"' value={address} onChange={(e) => setAddress(e.target.value)} aria-describedby="emailHelp" />

              {/* <input type="text" className="form-control" name='address' placeholder='"Click below for fetching address"' value={credentials.geolocation} onChange={(e) => setAddress(e.target.value)} aria-describedby="emailHelp" /> */}

              </fieldset>
            </div>
            <div className="m-3">
              <button type="button" onClick={handleClick} name="geolocation" className=" btn btn-success">Click for current Location </button>
            </div>
            <div className="m-3">
              <label htmlFor="exampleInputPassword1" className="form-label white-text">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" name='password' value={credentials.password} onChange={onChange}/>
            </div>
            <button type="submit" className="m-3 btn btn-success">Submit</button>
            <Link to="/login" className="m-3 mx-1 btn btn-danger">Already a user</Link>
          </form>
        </div>
      </div>
    )
}
