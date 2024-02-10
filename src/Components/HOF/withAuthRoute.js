import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function withAuthRoute(Component) {
  return function AuthenticatedComponent(props) {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();

    //The page  is accessible if the user has logged in, otherwise it will redirect to /login
    //There is a issue that is on which page this component is used that page show for a fraction of secon even if user is not logged in, then gets redirected to /login
    //This is because the user state is null initially and the component is rendered before the user state is updated
    //One way to solve this issue is to render null or a loading spinner until the authentication check is complete
    //but this will give a delay while checking  authentication, so you have to return a loading spinner or use Shimmer UI

    const [isChecking, setIsChecking] = useState(true);

        useEffect(() => {
            if(!(user && user.email)){
                navigate("/login");
            }else{
                setIsChecking(false);
            }
        }, [user, navigate]);

        if(isChecking){
            return null; // or return loading spinner or shimmer UI
        }
        return <Component{...props}/>
  }
}
