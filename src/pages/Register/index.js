import React from 'react'
import './register.scss'
import { RegistrationBg } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { useHistory } from 'react-router-dom'

const Register = () => {
    const history = useHistory()
    return (
        <div className="main">
            <div className="left">
                <img src={RegistrationBg} className="bg-image" alt="bg" />
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full name" placeholder="Full name" />
                <Gap height={18} />
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={30} />
                <Button title="Register" onClick={() => history.push('/login')} />
                <Link title="Already have account? Login here" onClick={() => history.push('/login')} />
            </div>
        </div>
    )
}

export default Register
