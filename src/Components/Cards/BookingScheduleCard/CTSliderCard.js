import React from 'react';



function CTSliderCard(props) {
  return (
    <>
        <div className='flex w-32 bg-white gap-3 my-3 rounded-lg hover hover:bg-cyan hover:scale-110 fc-ctslidercardcontainer'>
            <div className='ml-auto mr-auto block py-8'>
                <img src={props.src} alt="profileimg" className="w-12 mr-auto ml-auto"/>
                <h6 className='text-primary py-1'>{props.name}</h6>
            </div>
        </div>
    </>
  )
}

export default CTSliderCard
