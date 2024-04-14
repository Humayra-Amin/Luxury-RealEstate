import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sociallogin from "../Sociallogin/Sociallogin";
import useAuth from "../../hooks/useAuth";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const Login = () => {

    const { signInUser } = useAuth();

    const [showLoginPass, setShowLoginPass] = useState(false);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state || '/';


    const onSubmit = (data) => {
        const { email, password } = data;


        signInUser(email, password)
            .then((result) => {
                if (result.user) {
                    // navigate(from);
                    toast.success('Login successfully!!!')
                    setTimeout(() => {
                        navigate(from);
                    }, 1000);
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error("Invalid Email or Password!!!");
            })
    }


    return (
        <div className="font-roboto">
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card shrink-0 mb-14 md:w-[500px] lg:w-[500px] border-2 bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <h1 className="flex justify-center text-xl lg:text-3xl text-blue-500">Login</h1>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <div className="relative">
                                    <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered pl-10 w-full" />
                                    <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-blue-300"></FaEnvelope>
                                </div>

                                {errors.Email && <span className="text-red-500">This field is required</span>}

                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <div className="relative">
                                    <input type={showLoginPass ? "text" : "password"}
                                        placeholder="password"
                                        {...register("password", { required: true })}
                                        className="input input-bordered pl-10 w-full" />
                                    <span onClick={() => setShowLoginPass(!showLoginPass)} className="absolute top-7 right-3 transform -translate-y-1/2 h-6 text-xl text-blue-500">
                                        {
                                            showLoginPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                    <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-blue-300"></FaLock>
                                </div>

                                {errors.Password && <span className="text-red-500">This field is required</span>}

                            </div>


                            <div className="form-control mt-6">
                                <button className="btn bg-blue-500 text-white text-xl hover:bg-gray-200 hover:text-black hover:border-blue-500">Login</button>
                            </div>


                            <label className="label text-[16px] font-medium text-gray-400">
                                Don’t have an account yet? <Link to="/register" className="label-text-alt link link-hover text-[16px] font-medium text-blue-600 underline font-sedan">Sign Up</Link>
                            </label>

                            <Sociallogin></Sociallogin>

                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;