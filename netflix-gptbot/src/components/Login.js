import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Signup from "./Signup";

const Login = () => {
    const [signIn, setSignIn] = useState(true)
    const handleSignin = () => {
        setSignIn(!signIn)

    }
    return (
        <div>
            <div className="absolute">
                <Header />
                <img
                    src="https://knetflix.netlify.app/assets/images/bg.jpg"
                    alt="bg-img"
                    className="bg-opacity-100 "
                />
            </div>
            <form className="absolute w-11/12 md:w-4/12 p-6 md:p-12 bg-black my-20 mx-auto right-0 left-0 text-white bg-opacity-90 rounded-lg">
                <h2 className="font-bold text-3xl md:text-4xl mb-2 p-2 ">{signIn ? "Sign In" : "Sign Up"}</h2>
                {
                    !signIn && <input
                        type="text"
                        placeholder="Enter Your name"
                        className="w-full p-2 m-2 rounded-lg  bg-gray-500"
                    />
                }
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full p-2 m-2 rounded-lg bg-gray-500 "
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 m-2 rounded-lg  bg-gray-500 "
                />
                <button className="bg-red-600 text-white w-full p-2 md:px-20 m-2 my-8 rounded-lg" >
                    {signIn ? "Sign in" : "Sign up"}
                </button>
                {signIn && <div className="w-full flex justify-between">
                    <label htmlFor="myCheckbox" className="flex items-center ">
                        <input
                            type="checkbox"
                            id="myCheckbox"
                            className="form-checkbox h-4 w-5 m-2 text-blue-500"
                        /><span className="text-gray-400 m-2 float-left">Remember me</span>

                    </label>
                    <span className="text-gray-400 m-2">need help?</span>



                </div>}
                <p className="my-6 text-gray-400 cursor-pointer" onClick={handleSignin} >
                    {signIn ? "New to Netflix?Sign up now" : "Already a user Sign In"}
                </p>
                {signIn && <p className="text-gray-400">
                    Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.
                </p>}
            </form>
        </div>
    );
};

export default Login;
