import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FaLink, FaUser } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {

    const { user, updateUserProfile } = useAuth();
    const [fullName, setFullName] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [updateSuccess, setUpdateSuccess] = useState('');
    const [updateError, setUpdateError] = useState('');


    useEffect(() => {
        setFullName(user?.displayName || '');
        setImageURL(user?.photoURL || '');
    }, [user]);

    const handleUpdate = (e) => {
        e.preventDefault();

        updateUserProfile(fullName, imageURL)
            .then(() => {
                setUpdateSuccess('Profile Updated Successfully!!!')
            })
            .catch((error) => {
                console.error(error);
                setUpdateError('Profile Not Updated');
            });
    };

    const handleFullName = (e) => {
        setFullName(e.target.value);
    }

    const handleImageURL = (e) => {
        setImageURL(e.target.value);
    }

    return (
        <div className="font-roboto">
            <Helmet>
                <title>LuXeHome | Update Profile</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/luxicon.jpg" />
            </Helmet>

            {
                updateError && <p className="text-red-500 flex justify-center text-2xl font-sedan bg-red-200 shadow-lg p-6">{updateError}</p>
            }

            {
                updateSuccess && <p className="text-green-500 flex justify-center text-2xl bg-green-200 shadow-lg p-6">{updateSuccess}</p>
            }

            <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 font-roboto border-2 lg:p-4 bg-blue-400 text-white mt-[30px]">Update Profile</h1>

            <div className="hero">
                <div className="hero-content">
                    <div className="card shrink-0 md:w-[500px] lg:w-[500px] border-2 bg-base-100">

                        <form onSubmit={handleUpdate} className="card-body">

                            <h1 className="flex justify-center text-xl lg:text-3xl text-blue-500">Update Profile</h1>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>

                                <div className="relative">
                                    <input type="text" placeholder="fullname" value={fullName} onChange={handleFullName} className="input input-bordered pl-10 w-full" />
                                    <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-blue-300"></FaUser>
                                </div>

                            </div>


                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Image Url</span>
                                </label>

                                <div className="relative">
                                    <input type="text" placeholder="imageURL" value={imageURL} onChange={handleImageURL} className="input input-bordered pl-10 w-full" />
                                    <FaLink className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-blue-300"></FaLink>
                                </div>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-blue-500 text-white text-xl hover:bg-gray-200 hover:text-black hover:border-blue-500">Update</button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default UpdateProfile;