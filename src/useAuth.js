import { useContext } from "react";
import { useAuth } from "../context/AuthContext";

const useAuth = () => {

    const context = useContext(AuthContext);

    return context;
};

export default useAuth;