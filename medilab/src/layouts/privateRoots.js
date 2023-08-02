import React from 'react'
import {Route,Navigate,Routes as Switch} from "react-router-dom"
import Routes from '../routes';
export default function PrivateRoots({children,...rest}) {
    debugger
    const [isAuthenticated,setIsAuthenticated] = React.useState(localStorage.getItem("isAuthenticated"))
  
React.useEffect(()=>{
  setIsAuthenticated(localStorage.getItem("isAuthenticated"))
},[isAuthenticated])
    return (
        
         
              isAuthenticated
                ? (
                  children
                ) : (
                  <Navigate
                    to='/login'
                    replace
                  />
                )
          
        
      );
}
