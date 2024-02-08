import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { backgroundURL } from "../utils/constants";
import ManiBG from "../utils/_MANI.jpg"

const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(true);
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const [errorMessage,setErrorMessage]=useState(null);
   
    const dispatch=useDispatch();
    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm);
    }
    const handleButtonCLick=()=>{
        //checkValidData
        console.log(email.current.value);
        const message=checkValidData(email.current.value,password.current.value);
        //console.log(message);
        if(message)(setErrorMessage(message))
        else{
            //sign in/Sign up
            if(!isSignInForm){
                //Sign Up Logic
                createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/80881845?s=48&v=4"
                      }).then(() => {
                        const {uid,email,displayName,photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
                        
                      }).catch((error) => {
                        setErrorMessage(error.message)
                      });
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage)
                    // ..
                });

            }
            else{
                //SignIn Logic
                signInWithEmailAndPassword(auth, email.current.value,password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+"-"+errorMessage)
                });
                            }
            
        }
    }
    return <div>
        <Header/>
        <div className="absolute">
        <img src={ManiBG} alt="LOGO"></img>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="p-12 w-3/12 bg-black absolute mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-80 ">
            <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In" :"Sign Up"}</h1>
            {!isSignInForm&& (
            <input ref={name} type="text" placeholder="Full name" className="p-4 my-4 w-full bg-gray-700"/>)}
            <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700"/>
            <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
            <p className="text-red-600">{errorMessage}</p>
            <button  className="p-6 my-6 bg-red-700 w-full" onClick={handleButtonCLick} >{isSignInForm?"Sign In" :"Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix?Sign Up Now":"Already a member? Sign In Now."}</p>
        </form>
    </div> 
}
export default Login;