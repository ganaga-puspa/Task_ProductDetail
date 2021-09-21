import React from 'react'
import {Link } from 'react-router-dom'


function Nav(props) {


    // const login =() =>{

    //     const nav= useNavigate()
    //     const Handle = ()  =>{
    //         if(){
    //             nav('/addproduct')
    //         }
    //         nav('/login')
    //     }

    // }



    return (
        <div>
            <nav className='nav justify-content-center'>
                <Link className='nav-link' to='/'>Products</Link>
                <Link className='nav-link' to='/addProduct'>Add Products</Link>
                <Link onClick={props.login} className='nav-link' to='/login'>
                    {props.status ? "AdminLogout" : "AdminLogin"}
                    
                </Link>

            </nav>
        </div>
    )
}

export default Nav

