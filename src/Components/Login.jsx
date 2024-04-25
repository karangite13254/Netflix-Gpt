import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true);

  const toggelSignInForm = () => {
   setIsSignIn(!isSignIn)
  }

  return (
    <div>

      <Header />

      <div>
      <img className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background img"
      />
      </div>
      
      <form className=" w-3/12 p-12  absolute bg-black m-40 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">

        <h1 className="font-bold text-3xl py-6 ">{ isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && <input type="text" placeholder=" Full Name" className="p-2 my-2 w-full bg-gray-700"/>}
        <input type="text" placeholder="Email Address" className="p-2 my-2 w-full bg-gray-700" />
        <input type="password" placeholder="password" className="p-2 my-2 w-full  bg-gray-700"/>
        <button className="p-2 my-3 bg-red-700 w-full rounded-lg ">{isSignIn ? "Sign In" : "Sign Up"}</button>
        <p onClick={toggelSignInForm} className="p-2 cursor-pointer">{isSignIn? "New To Netflix? Sign Up Now " : "Already Registered ? Sign In Now" }</p>
      </form>

    </div>

  );
};

export default Login;
