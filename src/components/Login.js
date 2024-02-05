import { useState } from "react";
import Header from "./Header";

const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(true);
    const toggleSIgnInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    return <div>
        <Header/>
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/0549ea74-ea32-4c8a-84f7-95cecf2d0fdb/GB-en-20240115-trifectadaily-perspective_alpha_website_large.jpg" alt="LOGO"></img>
        </div>
        <form className="p-12 w-3/12 bg-black absolute mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-80 ">
            <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In" :"Sign Up"}</h1>
            {!isSignInForm&& (
            <input type="text" placeholder="Full name" className="p-4 my-4 w-full bg-gray-700"/>)}
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
            <button className="p-6 my-6 bg-red-700 w-full">{isSignInForm?"Sign In" :"Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSIgnInForm}>{isSignInForm?"New to Netflix?Sign Up Now":"Already a member? Sign In Now."}</p>
        </form>
    </div>
}
export default Login;