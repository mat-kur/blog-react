import {Route, Redirect, Navigate} from 'react-router-dom';
export const AuthLogInUser = ({ children, user}) => {
    
    if (user){
        if (user.user) {
            return <Navigate to={'/'} />
            // return children
        } else {
            return children;
        }
    }

};