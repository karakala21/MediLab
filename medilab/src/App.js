import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";
import PrivateRoots from "./layouts/privateRoots";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Login from "./components/components-overview/login";

export default ()=> {
  debugger
  const [isAuthenticated,setIsAuthenticated] = React.useState(localStorage.getItem("isAuthenticated"))
  
React.useEffect(()=>{
  setIsAuthenticated(localStorage.getItem("isAuthenticated"))
},[isAuthenticated])

  return(

  <Router basename={process.env.REACT_APP_BASENAME || ""}>
   
    <Routes>
   <Route path='/login' element={
                <Login/> } />

   
   
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={
              <PrivateRoots isAuthenticated={isAuthenticated}>
                <route.layout {...route}>
                  <route.component {...route} />
                </route.layout>
                </PrivateRoots>
            }
          />
        );
      })}
       
   
    </Routes>
  </Router>
)};
