import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { logo,photoURL } from "../utils/constants";
import Maniflix_logo from "../utils/ManiFlix.png"

const Header=()=>{
    const navigate=useNavigate();
    const user=useSelector(store=>store.user)
    const dispatch=useDispatch();

    const handleSignout=()=>{
        signOut(auth).then(() => {
            //navigate("/");
          }).catch((error) => {
            // An error happened.
            navigate("/error");
          });
    }

    useEffect(()=>{
       
        const unsuscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid,email,displayName,photoURL} = user;
            dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
            navigate("/browse")
            // ...
        } else {
            // User is signed out
            // ...
            dispatch(removeUser());
            navigate("/");
        }
        });
        //unsuscribe when component unmounts; 
        return ()=>{unsuscribe();

        }
    },[])
    return( 
    <div className="absolute flex justify-between w-screen px-8 py-2 bg-gradient-to-b from-black z-20 ">
        <img className="w-44 "src={Maniflix_logo} alt="LOGO"></img>
        {user && <div className="flex">
            <img className=" w-12 h-12 m-auto px-1"alt="usericon" src={photoURL}/>
            <button className="text-white py-5" onClick={handleSignout}>Sign Out</button>
        </div>}
    </div>

    )
}
export default Header
