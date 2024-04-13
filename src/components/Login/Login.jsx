import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sociallogin from "../Sociallogin/Sociallogin";
import useAuth from "../../hooks/useAuth";
import { FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {

    const { signInUser } = useAuth();

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
                    navigate(from);
                }
            });
    }

    return (
        <div className="font-roboto">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card shrink-0 mb-14 md:w-[500px] lg:w-[500px] shadow-2xl bg-base-100">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <div className="relative">
                                    <input type="email" placeholder="email" {...register("email", { required: true })} className="input input-bordered pl-10 w-full" />
                                    <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-gray-500"></FaEnvelope>
                                </div>

                                {errors.Email && <span className="text-red-500">This field is required</span>}

                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <div className="relative">
                                    <input type="password" placeholder="password" {...register("password", { required: true })} className="input input-bordered pl-10 w-full" />
                                    <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-gray-500"></FaLock>
                                </div>

                                {errors.Password && <span className="text-red-500">This field is required</span>}

                            </div>


                            <div className="form-control mt-6">
                                <button className="btn bg-blue-500 text-white text-xl hover:bg-gray-200 hover:text-black hover:border-blue-500">Login</button>
                            </div>


                            <label className="label text-[16px] font-medium text-gray-400">
                                Don’t have an account yet? <Link to="/register" className="label-text-alt link link-hover text-[16px] font-medium text-blue-600">Sign Up</Link>
                            </label>

                            <Sociallogin></Sociallogin>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;