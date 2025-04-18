import React from 'react'

const LoginPage = () => {
  return (
    <div className='login-page'>
        <form>
            <h3>Login</h3>
            <input type="text" placeholder='User Name' />
            <input type="text" placeholder='Password' />
            <input type="submit" value={"Login"} />
        </form>
    </div>
  )
}

export default LoginPage