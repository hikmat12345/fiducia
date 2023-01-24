import React from 'react';

import './FCButton.scss';

function FCButton({primary,
    children,
    className = "",
    loading,
    loaderProps,
    ...rest
    }) {
        
  return (
    <> 
        <button
          className={`fae-button ${
            primary && "primary-btn-bg-button"
          } ${className}`}
          {...rest}
        >
          {children}
        </button> 
    </>
  )
}

export default FCButton
