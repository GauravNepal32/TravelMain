import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import { useForm } from "react-hook-form";
import { useAuth } from '../../Components/Auth/auth';
const Login = () => {
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const auth = useAuth();
    const onSubmit = async (data) => {
        try {
            setErrMsg('')
            setSuccessMsg('')
            const response = await axios.post('http://localhost:8000/api/user-login', {
                email: data.login_username, password: data.login_password
            },
                { withCredentials: true }
                , {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
            if (response.status === 200) {
                auth.setIsLogin(true)
                auth.login(response.data.user)
                setSuccessMsg(response.data.msg)
            }
            console.log(response)
        } catch (err) {
            setErrMsg(err?.response?.data?.msg)
            console.log(err)
        }

    }
    return (
        <div className='login-container'>
            <div className="login-wrapper p-md-4">
                <div className="big-heading fs-3 fw-bold text-center">
                    Login
                </div>
                {errMsg.length > 0 &&
                    <div className="error-display-container">
                        {errMsg}
                    </div>
                }
                {successMsg.length > 0 &&
                    <div className="success-display-container">
                        {successMsg}
                    </div>
                }
                <form onSubmit={handleSubmit(onSubmit)} className='mt-4' action="">
                    <div className="booking-contact-name-container mt-3 px-3">
                        <div className="row mb-3">
                            <label className='px-0' htmlFor="username">Username</label>
                            <input type="text"
                                {
                                ...register('login_username', {
                                    required: true,
                                })
                                } className={errors?.username ? "form-control border-danger" : "form-control"} placeholder="" />
                            {errors?.login_username?.type === "required" && <p className='mt-1 text-danger'>This field is required</p>}
                        </div>
                        <div className="row mb-5">
                            <label className='px-0' htmlFor="username">Password</label>
                            <input type="password"
                                {
                                ...register('login_password', {
                                    required: true,
                                })
                                } className={errors?.username ? "form-control border-danger" : "form-control"} placeholder="****" />
                            {errors?.login_password?.type === "required" && <p className='mt-1 text-danger'>This field is required</p>}
                        </div>
                        <div className="row mb-3">
                            <input className='btn primary-btn text-white p-2' type="submit" value={'Sign in'} />
                        </div>
                        <div className="row mb-3">
                            <button className='btn text-primary'>Forgot Password?</button>
                        </div>
                        <div className="light-text text-center fs-6">
                            <span>
                                Do not have account?
                            </span>
                            <Link className='text-primary text-center' to='/register'>Register</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login