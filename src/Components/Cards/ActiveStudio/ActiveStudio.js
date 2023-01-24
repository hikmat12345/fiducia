import React from 'react';
import './ActiveStudio.scss';
function ActiveStudio() {
  return (
    <>
        <div className="w-full max-w-md   bg-white rounded-lg   dark:bg-gray-800 dark:border-gray-700 fc-activestudio-card">
        <div className="flex items-center justify-between mt-2  p-4">
                <h5 className="text-xl font-bold leading-none theme-primary dark:text-white">Active Studio</h5>
            </div>
            <div className='flex gap-4 flex-wrap pl-4 pb-4 pr-4 '>
                <div className="text-sm shadow  font-medium rounded-md p-1 border-solid border-2 border-primary w-5/12 ">
                    <h3>Studio 1</h3>
                    <p>Trainer</p>
                    <h5>Walaa Waly</h5>
                    <div className='flex'>
                        <div>
                            <p>Customer</p>
                        </div>
                        <div className='ml-auto'>
                            <p>Size</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <h5>Magdy</h5>
                        </div>
                        <div className='ml-auto'>
                            <h5>S</h5>
                        </div>
                    </div>                    
                </div>
                <div className="text-sm shadow  font-medium rounded-md p-1 border-solid border-2 border-primary w-5/12 ">
                    <h3>Studio 2</h3>
                    <p>Trainer</p>
                    <h5>Walaa Waly</h5>
                    <div className='flex'>
                        <div>
                            <p>Customer</p>
                        </div>
                        <div className='ml-auto'>
                            <p>Size</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <h5>Magdy</h5>
                        </div>
                        <div className='ml-auto'>
                            <h5>S</h5>
                        </div>
                    </div>                    
                </div>
                <div className="text-sm shadow  font-medium rounded-md p-1 border-solid border-2 border-primary w-5/12 ">
                    <h3>Studio 3</h3>
                    <p>Trainer</p>
                    <h5>Walaa Waly</h5>
                    <div className='flex'>
                        <div>
                            <p>Customer</p>
                        </div>
                        <div className='ml-auto'>
                            <p>Size</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <h5>Magdy</h5>
                        </div>
                        <div className='ml-auto'>
                            <h5>S</h5>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </>
  )
}

export default ActiveStudio
