import React from 'react'
import {Navigate} from "react-router-dom"
export default function PrivateRoots({children,...rest}) {
    debugger
    const [isAuthenticated,setIsAuthenticated] = React.useState(localStorage.getItem("isAuthenticated"))

React.useEffect(()=>{
  setIsAuthenticated(localStorage.getItem("isAuthenticated"))
},[isAuthenticated])
    return (


              isAuthenticated==1
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
