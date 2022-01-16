import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";



//initialize firebase app
initializeFirebase();



const useFirebase = () => {


    const [user, setUser] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(' ');

    const googleProvider = new GoogleAuthProvider();


    const auth = getAuth();
    const registerUser = (email, password, name, history) => {
        setisLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const newUser = { email, displayName: name };
                setUser(newUser);
                setError(' ');
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
            })

            .finally(() => setisLoading(false));
    }


    const loginUser = (email, password, location, history) => {
        setisLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state?.from || '/home';
                history.push(destination);
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                setError(error.message);

            })

            .finally(() => setisLoading(false));

    }

    const signInwithGoogle = (location, history) => {
        setisLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message);
            })
            .finally(() => setisLoading(false));
    }


    //observe user state
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setisLoading(false);
        })
    }, [])


    const logOut = () => {
        signOut(auth)
            .then(() => {
                //sign out successfull
            })
            .catch((error) => {
                //an error ocure
            })
            .finally(() => setisLoading(false));
    }



    return {
        user,
        error,
        registerUser,
        signInwithGoogle,
        loginUser,
        isLoading,
        logOut,
    }



}

export default useFirebase;