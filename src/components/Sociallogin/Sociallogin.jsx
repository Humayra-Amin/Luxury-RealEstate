import { FaGoogle, FaGithub } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Sociallogin = () => {

    const { googleLogin, githubLogin } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location?.state || "/";


    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then((result) => {
                if (result.user) {
                    navigate(from);
                }
            });
    };

    return (
        <div className="font-roboto">
            <div className="divider font-sedan">Or Sign Up With</div>

            <div className="mt-6 text-2xl flex flex-row lg:flex-row md:flex-row items-center justify-center gap-10">

                <FaGoogle onClick={() => handleSocialLogin(googleLogin)}></FaGoogle>

                <FaGithub onClick={() => handleSocialLogin(githubLogin)}></FaGithub>

            </div>

        </div>
    );
};

export default Sociallogin;