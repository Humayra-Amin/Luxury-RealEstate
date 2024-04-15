import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {

    const { user } = useAuth();

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userImage, setUserImage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (user) {
            setUserName(user.displayName || '');
            setUserEmail(user.email || '')
            setUserImage(user.photoURL || '')
            setLoggedIn(true)
        }
        else {
            setLoggedIn(false)
        }
    }, [user])


    return (

        <div className="container mx-auto w-10/12 lg:w-4/5 text-center my-16 text-xl">

            <Helmet>
                <title>LuXeHome | User Profile</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/luxicon.jpg" />
            </Helmet>

            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 font-roboto border-2 lg:p-4 bg-blue-400 text-white">User Information</h1>

            {loggedIn ? (

                <div className="card bg-base-100 shadow-xl border-2 lg:w-[600px] lg:ml-[300px]">
                    <figure data-aos="fade-up" data-aos-duration="1000" className="px-8 pt-8">
                        <img src={userImage} alt="" className="rounded-xl w-[200px]" />
                    </figure>
                    <div data-aos="fade-down" data-aos-duration="1000" className="card-body items-center text-center">
                        <h2 className="card-title">Name: <span className="font-normal">{userName}</span></h2>
                        <h2 className="card-title">Email: <span className="font-normal">{userEmail}</span></h2>
                    </div>
                </div>

            ) : (

                <div>
                    <h1 className="font-semibold font-roboto text-2xl mt-40">Profile Logged Out</h1>

                    <button className="mt-10"><Link to="/" className="btn-ghost bg-gray-400 text-black font-medium text-xl text-center rounded-xl p-2 font-sedan">Go Back Home</Link></button>

                    <button className="mt-10"><Link to="/login" className="btn-ghost bg-blue-400 text-black font-medium text-xl text-center ml-[80px] lg:ml-[180px] rounded-xl p-2 font-sedan">Go To Login Page</Link></button>
                </div>

            )}

        </div>
    );
};

export default UserProfile;