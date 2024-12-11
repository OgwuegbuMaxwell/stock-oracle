import React, { useContext } from 'react'
import Button from './Button'
import {Link, useNavigate} from 'react-router-dom'
import { AuthContext } from '../AuthProvider'


const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log("Logged Out")
    navigate('/login')

  }
  return (
    <>
        <div className="navbar container pt-3 pb-3 align-items-start">
            <Link className='navbar-brand text-light' to="/">Stock Prediction App</Link>

            <div>
                {isLoggedIn ? (
                  <>
                    <Button text="Dashboard" class="btn-info" url="/dashboard"  />
                     &nbsp;
                    <button className='btn btn-outline-danger' onClick={handleLogout}>Logout</button>
                  </>
                ): (
                  <>
                    <Button text="Login" class="btn-outline-info" url="/login"  />
                    &nbsp;
                    <Button text="Register" class="btn-info" url="/register"/>
                  </>
                )}
                
            </div>
        </div>
    </>
  )
}

export default Header