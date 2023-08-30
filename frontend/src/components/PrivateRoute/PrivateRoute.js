import {Route, Redirect, Navigate} from 'react-router-dom';
export const Auth = ({ children, user}) => {

    if (user){
        if (user.user && user.user.isAdmin) {
            return children
        } else {
            return <Navigate to={'/login'} />;
        }
    }

};