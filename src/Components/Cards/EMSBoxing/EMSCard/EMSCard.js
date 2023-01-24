import React from 'react';
import './EMSCard.scss';
// import { getFileSrcFromPublicFolder } from '../../../../utils'
import {EllipsisOutlined } from '@ant-design/icons';

function EMSCard(props) {
  return (
    <>
      <div className='rounded-lg hover hover:scale-110 fc-emscard text-white'>
            <div className='text-right bg-transparent pt-8 pr-10'><EllipsisOutlined style={{fontSize: '20px'}} /></div>
                <div className="mt-11 px-10 text-center">
                    <h3 className='text-left'>{props.title}</h3>
                    <h6 className='text-left'>{props.para}</h6>  
                    <a href={props.src}>
                        <button className='text-white outline-1 outline bg-transparent border mt-2 w-48 py-1 rounded-lg'>View</button>
                    </a>
                </div>
        </div>
    </>
  )
}

export default EMSCard
