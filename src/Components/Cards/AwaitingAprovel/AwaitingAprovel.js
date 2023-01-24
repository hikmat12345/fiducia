import React from 'react';
import './AwaitingAprovel.scss';
import { CloseCircleOutlined } from '@ant-design/icons';
import {CheckCircleOutlined} from '@ant-design/icons';


function AwaitingAprovel({awaitingCard}) {
  return (
    <>
     <div className="w-full text-primary  bg-white dark:bg-gray-800 dark:border-gray-700 fc-awaitingaprovel-card">
            <div className="flex items-center justify-between mt-2 mb-2 p-4">
                <h5 className="text-xl font-bold leading-none theme-primary dark:text-white">Awaiting Approval</h5>
            </div>
            <div className="flow-root relative"> 
                <ul role="list" className=" dark:divide-gray-700 "> 
                  {awaitingCard.map((item) => ( 
                    <li className=" px-4 sm:py-1 hover:bg-slate-200">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <img className="w-11 h-11 rounded-full" src = {item.imgsrc}  alt="Bonnie image" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h5 className="text-primary">
                                        {item.name}
                                    </h5>
                                    <p>
                                        {item.description}
                                    </p>
                                </div>
                                <div className="inline-flex items-center gap-1 text-base font-semibold theme-primary dark:text-white">
                                <CloseCircleOutlined className='hover hover:scale-110 text-red' /><CheckCircleOutlined className='text-cyan hover hover:scale-110'/>
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

export default AwaitingAprovel
