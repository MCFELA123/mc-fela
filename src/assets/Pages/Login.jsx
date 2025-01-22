import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className='login-page'>Login
    <br /><Link to={'/monica'}>click me!!</Link>
    </div>
  )
}


export default Login