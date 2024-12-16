import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const OnLogin = () => {
        login();
        navigate("/Items");
    };

    return (

        <div>
            <div>
                <button
                    className="px-6 py-2 text-white bg-green-500 rounded-md hover:bg-blue-600 transition duration-300 flex justify-center items-center"

                    onClick={OnLogin}>Login</button>
            </div>
        </div>
    );
};

export default LoginPage;
