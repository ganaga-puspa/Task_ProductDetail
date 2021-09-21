import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'



function Admin(data) {

    console.log(data)
    
    const nav = useNavigate();
    
    const handleLogout = () => {       
        nav('/login');
      }

      
    // const nav = useNavigate();
    // console.log(handleLoginSubmit)

    // if (!authorized){
    //     return nav('')      
    // }   


    return (
        <div>
               
                <Link className='nav-link' to='/addProduct'>Add Products</Link>
                <input type="button" onClick={handleLogout} value="Logout" />
                
          
        </div>
    )
}

export default Admin

