import React,{useState} from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [credentials, setcredentials] = useState({email:"",password:""})

    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
    
        const response = await fetch("http://localhost:5000/api/creatuser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            email: credentials.email, 
            password: credentials.password, 
            
          })
        });
    
        if (response.status !== 200) {
       
          alert("Enter Valid Credentials");
        } else {
          alert("Created successfully");
        }
      } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred. Please try again.');
      }
    };
    
      
 const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
 }
  return (
    <div>
     <div className='container'>
    <form onSubmit={handleSubmit}>
  
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
  </div>
 

  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to="/creatuser" className='m-3 btn btn-danger'>I'm a new user</Link>
</form>
</div>

    </div>
  )
}
