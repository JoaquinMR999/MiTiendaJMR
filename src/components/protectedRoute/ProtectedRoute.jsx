import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute({ children }) {
    const { isLoggedIn } = useAuth();

    const location = useLocation();

    return isLoggedIn ? children : <Navigate to={"/login"} state={location}/>
}