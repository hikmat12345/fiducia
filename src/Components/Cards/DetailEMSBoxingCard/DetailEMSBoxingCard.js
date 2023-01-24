import React from 'react';
import './DetailEMSBoxingCard.scss';
import { getFileSrcFromPublicFolder } from '../../../utils';

function DetailEMSBoxingCard() {
  return (
    <>
        <div className="flex gap-2 w-full px-1 py-1  bg-white rounded-lg  fc-message-card">
            <div className='flex-1 w-3/12 relative'>
                <img src={getFileSrcFromPublicFolder("Group 9652@2x.png")} alt="titleLogo" />
                <button className='absolute left-20 z-10 bottom-14 rounded-lg text-white border py-2 w-7/12 '>Upload New Image</button>
            </div>
            <div className='flex-1 w-4/12 p-4'>
                <h1>EMS Boxing</h1> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>   
                <div className='flex mt-4'>
                <button className='text-black bg-white border outline outline-2  outline-offset-2 rounded-lg px-3 py-3 w-4/12 hover hover:scale-105'>Edit</button>
                <button className='text-red bg-white border outline outline-2  outline-offset-2 rounded-lg ml-10 px-3 py-3 w-4/12 hover hover:scale-105'>Delete</button>
                </div>
            </div>
            <div className='flex-1 w-5/12'>
              <div className='p-4 w-3/3'>
                  <div className='flex pt-6 pb-3 px-2  w-3/3 price-card'>
                    <div><h5>Sessions</h5></div>
                    <div><h5>Price</h5></div>
                    <div><h5>Expiration in</h5></div>
                  </div>
                  <div className='price-card w-full max-w-sm my-2 py-3 px-8 bg-white rounded-lg drop-shadow-md   dark:bg-gray-800 dark:border-gray-700'>
                    <div className='flex'><h5>8</h5><span className=''>ses</span></div>
                    <div className='flex'><h5>2000</h5><span>L.E</span></div>
                    <div className='flex'><h5>3</h5><span>mo</span></div>
                  </div>
                  <div className='price-card w-full max-w-sm my-2 py-3 px-8 bg-white rounded-lg drop-shadow-md   dark:bg-gray-800 dark:border-gray-700'>
                    <div className='flex'><h5>6</h5><span className=''>ses</span></div>
                    <div className='flex'><h5>2150</h5><span>L.E</span></div>
                    <div className='flex'><h5>6</h5><span>mo</span></div>
                  </div>
                  <div className='price-card w-full max-w-sm my-2 py-3 px-8 bg-white rounded-lg drop-shadow-md   dark:bg-gray-800 dark:border-gray-700'>
                    <div className='flex'><h5>2</h5><span className=''>ses</span></div>
                    <div className='flex'><h5>1500</h5><span>L.E</span></div>
                    <div className='flex'><h5>5</h5><span>mo</span></div>
                  </div>
                  <div className='price-card w-full max-w-sm my-2 py-3 px-8 bg-white rounded-lg drop-shadow-md   dark:bg-gray-800 dark:border-gray-700'>
                    <div className='flex'><h5>1</h5><span className=''>ses</span></div>
                    <div className='flex'><h5>3000</h5><span>L.E</span></div>
                    <div className='flex'><h5>3</h5><span>mo</span></div>
                  </div>
                  <div className='price-card w-full max-w-sm my-2 py-3 px-8 bg-white rounded-lg drop-shadow-md   dark:bg-gray-800 dark:border-gray-700'>
                    <div className='flex'><h5>3</h5><span className=''>ses</span></div>
                    <div className='flex'><h5>2000</h5><span>L.E</span></div>
                    <div className='flex'><h5>4</h5><span>mo</span></div>
                  </div>
                  
              </div>
            </div>
        </div>
    </>
  ) 
}

export default DetailEMSBoxingCard
