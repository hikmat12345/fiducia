import './App.scss';
import SignIn from './Pages/SignIn/SignIn';
 import Categories from './Pages/CategoriesPage/CategoriesPage';
import BookingSchedulePage from './Pages/BookingSchedulePage/BookingSchedulePage';
import HomePage from './Pages/HomePage/HomePage';
import AlertCenterPage from './Pages/AlertCenterPage/AlertCenterPage';

 
//libs
import React, { Suspense, useEffect, lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import FCLoading from './Components/FCLoading/FCLoading';
 import { getCookies, getFileSrcFromPublicFolder } from "./utils";
 import NotFound from "./NotFound/NotFound";
  
  
const App = () => {
  
  const userSignedInStatus =    getCookies("userId") !== undefined ? true : false;
  
  useEffect(() => {
    if (userSignedInStatus) {
      if(window.initScript) {
        window.initScript(getCookies("customer_details"));
      }
    } 
  }, []);
 
  return ( 
      <Router>
            <Suspense
              fallback={
                <FCLoading
                  loaderImage={getFileSrcFromPublicFolder("loader.svg")}
                  type="svg"
                />
              }
            >  
             <Routes>
                {/* <TPGuardedRoute
                  path="/"
                  element={<GridSamplePage />}
                  exact
                  auth={true}
                /> */}
              <Route path="/" element={<SignIn />} />
              <Route path="/home" element={<HomePage />} /> 
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/booking-schedule" element={<BookingSchedulePage />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/alert-center" element={<AlertCenterPage/>} /> 
              <Route path="*" element={<NotFound />} exact auth={true} />
            </Routes>
        </Suspense>
    </Router> 
    
  );
}

export default App; 