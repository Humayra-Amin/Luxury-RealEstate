import { FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Sociallogin = () => {

    const { googleLogin } = useAuth();
    return (
        <div>
            <div className="divider">Sign Up With</div>

            <div className="mt-6 text-2xl flex flex-row lg:flex-row md:flex-row items-center justify-center gap-10">

                <FaGoogle onClick={() => googleLogin()}></FaGoogle>

                <FaGithub></FaGithub>

            </div>

        </div>
    );
};

export default Sociallogin;