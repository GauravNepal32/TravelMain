import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = async (data) => {
        try {
            setErrMsg('')
            setSuccessMsg('')
            const response = await axios.post('http://localhost:8000/api/user-register', {
                fname: data.registerfName, lname: data.registerlName, username: data.username, email: data.email, password: data.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if (response.status === 200) {
                setSuccessMsg(response.data.msg)
            }
            console.log(response)
        } catch (err) {
            setErrMsg(err?.response?.data?.msg)
            console.log(err)
        }

    }
    return (
        <div className='register-container'>
            <div className="register-wrapper p-md-5 p-2">
                <div className="big-heading fs-3 fw-bold text-center">
                    Register
                </div>
                {errMsg.length > 0 &&
                    <div className="error-display-container mx-3">
                        {errMsg}
                    </div>
                }
                {successMsg.length > 0 &&
                    <div className="success-display-container mx-3">
                        {successMsg}
                    </div>
                }

                <form onSubmit={handleSubmit(onSubmit)} className='mt-1' action="">
                    <div className="booking-contact-name-container mt-3 px-3">
                        <div className="row mb-3">
                            <div className="col">
                                <label className='px-0' htmlFor="username">Username</label>
                                <input type="text"
                                    {
                                    ...register('username', {
                                        required: true,
                                    })
                                    } className={errors?.username ? "form-control border-danger" : "form-control"} placeholder="" />
                                {errors?.username?.type === "required" && <p className='mt-1 text-danger'>This field is required</p>}
                            </div>
                        </div>
                        <div className="row row-cols-md-2 g-4 row-cols-1 mb-3">
                            <div className="col">
                                <label className='px-0' htmlFor="username">First Name*</label>
                                <input
                                    class={errors?.registerfName ? "form-control border-danger w-100 mt-1" : "form-control w-100"}
                                    {
                                    ...register('registerfName', {
                                        required: true,

                                    })
                                    }
                                    type="text" placeholder='' />
                                {errors?.registerfName?.type === "required" && <p className='mt-1 text-danger'>This field is required</p>}

                            </div>
                            <div className="col">
                                <label className='px-0' htmlFor="username">Last Name*</label>
                                <input
                                    class={errors?.registerlName ? "form-control border-danger w-100 mt-1" : "form-control w-100"}
                                    {
                                    ...register('registerlName', {
                                        required: true,

                                    })
                                    }
                                    type="text" placeholder='' />
                                {errors?.registerlName?.type === "required" && <p className='mt-1 text-danger'>This field is required</p>}
                            </div>
                        </div>
                        <div className="row g-4 row-cols-1 mb-3">
                            <div className="col">
                                <label className='px-0' htmlFor="username">Email*</label>
                                <input type="email"
                                    {
                                    ...register('email', {
                                        required: true,
                                        pattern: /^\S+@\S+$/i

                                    })
                                    }
                                    className={errors?.email ? "form-control border-danger" : "form-control"}
                                    placeholder="Email*" />
                                {errors?.email?.type === "required" && <p className='mt-1 text-danger'>This field is required</p>}
                                {errors?.email?.type === "pattern" && <p className='mt-1 text-danger'>Please enter a valid email</p>}
                            </div>
                        </div>
                        <div className="row row-cols-md-2 g-4 row-cols-1 mb-3">
                            <div className="col">
                                <label className='px-0' htmlFor="username">Password*</label>
                                <input type='password'
                                    {...register("password", {
                                        required: true,
                                        minLength: 8,
                                    })}
                                    className={errors?.password ? "form-control border-danger" : "form-control"}
                                    placeholder=""
                                />
                                {errors?.password?.type === "required" && <p className='mt-1 text-danger'>This field is required</p>}
                                {errors?.password?.type === "minLength" && <p className='mt-1 text-danger'>Password length is short</p>}

                            </div>
                            <div className="col">
                                <label className='px-0' htmlFor="username">Confirm Password*</label>
                                <input type='password'
                                    {...register("confirm_password", {
                                        required: true,
                                        validate: (val) => {
                                            if (watch('password') != val) {
                                                return "Your passwords do no match";
                                            }
                                        },
                                    })}
                                    className={errors?.confirm_password ? "form-control border-danger" : "form-control"}
                                />
                                {errors?.confirm_password?.type === "validate" && <p className='mt-1 text-danger'>Password does not match</p>}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="light-text fs-6">By signing up you agree to terms & conditions</div>
                        </div>
                        <div className="row mb-3">
                            <div className="col">
                                <input className='btn primary-btn text-white p-2' type="submit" value={'Sign UP'} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="light-text text-center fs-6">
                                    <span className='text-center'>
                                        Already have an account?
                                    </span>
                                    <Link className='text-primary ms-2' to='/login'>Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register