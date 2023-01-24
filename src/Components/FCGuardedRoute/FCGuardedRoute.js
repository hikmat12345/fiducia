import React, {useLayoutEffect} from 'react'
import {Route, Navigate, useLocation} from "react-router-dom";

function FCGuardedRoute({
    component: Component,
    auth,
    status,
    failedStatusPath,
    redirectPath,
    render,
    ...rest
  }) {
    const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Route
      {...rest}
      render={
        render
          ? render
          : (props) =>
              auth === true ? (
                // status === true ? (
                <Component {...props} />
              ) : (
                // : (
                //   <Redirect to={failedStatus_path} />
                // )
                // )
                <Navigate
                  to={{
                    pathname: redirectPath,
                    state: { next: props.location.pathname },
                  }}
                />
             )
      }
    />
    </>
  )
}

export default FCGuardedRoute
