import React from 'react'
import "./FCShadowBox.scss"
function FCShadowBox({children}) {
  return (
    <div className='fc-shadow-box-container'>
        {children}
    </div>
  )
}

export default FCShadowBox
