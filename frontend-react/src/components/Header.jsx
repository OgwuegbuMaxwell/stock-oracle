import React from 'react'
import Button from './Button'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
        <div className="navbar container pt-3 pb-3 align-items-start">
            <Link className='navbar-brand text-light' to="/">Stock Prediction App</Link>

            <div>
                <Button text="Login" class="btn-outline-info" url="/login"  />
                &nbsp;
                <Button text="Register" class="btn-info" url="/register"/>
            </div>
        </div>
    </>
  )
}

export default Header