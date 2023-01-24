import React from 'react';
import './Messages.scss';
import { getFileSrcFromPublicFolder } from '../../../utils'

function Messages({messageCard}) {
  return (
    <>
        <div className="w-full max-w-md   bg-white rounded-lg   dark:bg-gray-800 dark:border-gray-700 fc-message-card">
            <div className="flex items-center justify-between mt-2 mb-2 p-4">
                <h5 className="text-xl font-bold leading-none theme-primary dark:text-white">Messages</h5>
            </div>
            <div className="flow-root relative"> 
            <ul role="list" className=" dark:divide-gray-700 ">
                 {messageCard.map((item) => (
                    <li className="py-2 my-0 sm:px-2 hover:bg-slate-200 fc-activity-card-li">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-12 h-12 rounded-full" src={item.imgsrc}  alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className='flex'>
                                        <div>
                                            <h5 className="text-primary">
                                                {item.name}
                                            </h5>
                                            <p>Lorum is a simple</p>
                                        </div>
                                        <div className="inline-flex ml-auto text-base  theme-primary dark:text-white fc-messages-time">
                                            <p>{item.time}</p>
                                        </div>
                                    </div>
                                    <div className='flex'>
                                        <div>
                                            <p>
                                              {item.description}
                                            </p>
                                        </div>
                                        <div className='inline-flex ml-auto text-base theme-primary'>
                                            <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-black bg-cyan rounded-full">{item.totalreply}
                                            </span>
                                        </div>
                                    </div>
                                </div>       
                            </div>
                        </li>
                     ))}
                 </ul>
            </div>
            
        </div>
    </>
  )
}

export default Messages
