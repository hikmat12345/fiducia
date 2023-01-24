import React from 'react'
 import { Input } from 'antd';
 import "./FCITextInput.scss"
function FCITextInput({placeholderText, labelText}) {
  return (
    <div className='fc-text-inp-container'>
        <label>{labelText}</label>
        <Input placeholder={placeholderText} />
    </div>
  )
}

export default FCITextInput
