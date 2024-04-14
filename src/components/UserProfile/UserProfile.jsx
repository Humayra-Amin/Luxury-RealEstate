import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {

    const { user } = useAuth();

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userImage, setUserImage] = useState('');

    useEffect(() => {
        if (user) {
            setUserName(user.displayName || 'user');
            setUserEmail(user.email || '')
            setUserImage(user.photoURL || '')
        }
    }, [user])

    return (
        <div className="container mx-auto w-10/12 lg:w-4/5 text-center my-24 text-xl">
            <div className="card bg-base-100 shadow-xl lg:w-[600px] lg:ml-[300px]">
                <figure className="px-8 pt-8">
                    <img src={userImage} alt="" className="rounded-xl w-[200px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name: <span className="font-normal">{userName}</span></h2>
                    <h2 className="card-title">Email: <span className="font-normal">{userEmail}</span></h2>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;