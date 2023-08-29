import React from 'react'
import { useSelector } from 'react-redux'
import { BiDonateBlood, BiUserCircle } from "react-icons/bi";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"

const Header = () => {
    const {user} = useSelector(state => state.auth);
    const navigate = useNavigate()

    // Handelling logout
    const handleLogout = () => {
        localStorage.clear();
        toast.error("Logout successfully");
        navigate("/login")
    }

  return (
    <>
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><BiDonateBlood color='red'/> Blood Bank App</a>
                <div>
                    <li className='d-flex'>
                        <h6 className='text-light mx-3 '><BiUserCircle /> Welcome {user?.name} !</h6> 
                        <button type="button" className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</button>
                    </li>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header