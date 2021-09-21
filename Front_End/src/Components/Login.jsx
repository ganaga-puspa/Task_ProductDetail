import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
// import axios from 'axios'

const Login =  () => {

    const nav = useNavigate();

    const [usernameInput, setUsername] = useState(null)
    const [passwordInput, setPassword] = useState(null)

    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
      setPassword(e.target.value);
  }
  
  const handleLoginSubmit = (e) => {
      e.preventDefault();
      const data={
        username: 'Ganaga',
        password: '1234'
      }
    //   console.log(data)
    //   nav('/admin')
    //   let value = {
    //       username: 'Ganaga',
    //       password: '1234'
    //   }

      if ((usernameInput === data.username) && (passwordInput === data.password)) {                   
        nav('/addProduct')
    } else {
      nav('/')
    }
}

   
   

    return (
        <div className="container">
        <div className="container">
  <div className="w-50 mx-auto shadow p-5">
    <h2 className="text-center mb-4">ADMIN LOGIN</h2>
    
    <hr></hr>
    
    <form  onSubmit={handleLoginSubmit}>
            <div className="form-group">
                <input
                type="text"
                id="nmae"
                className="form-control"
                placeholder="Enter Username"
                value={usernameInput}
                onChange={handleUsernameChange}
                />
            </div>
            <hr></hr>
            <div className="form-group">
                <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter Password"
                value={passwordInput}
                onChange={handlePasswordChange}
                />
            </div>
            <hr></hr>
            <center>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
            </center>
      </form>
            

     
   
  </div>
</div>
    </div>
    )
}

export default Login
