import React from 'react'
import {Route,Navigate,Routes as Switch} from "react-router-dom"
import Routes from '../routes';
export default function PrivateRoots({isAuthenticated,children,...rest}) {
    debugger
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
