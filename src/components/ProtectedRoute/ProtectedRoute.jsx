import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Spinner/Spinner";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <Spinner></Spinner>
    }

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default ProtectedRoute;