import React from 'react'
import { LoginBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()
    return (
        <div className="main">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="bg" />
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={30} />
                <Button title="Login" onClick={() => history.push('/')} />
                <Link title="Don't have account? Create one here" onClick={
                    () => history.push('/register')
                } />
            </div>
        </div>
    )
}

export default Login
