import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";



const useAuth = () => {
    //akana react thaka 'useContext' ana hoica... & ar vitor 'AuthContext' ka AuthProvider file thaka ana hoica ....
    const auth = useContext(AuthContext);
    return auth;
}

export default useAuth;