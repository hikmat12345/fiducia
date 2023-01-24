import React from 'react'
import './ActiveTrainer.scss';
import { getFileSrcFromPublicFolder } from '../../../utils'

export default function ActiveTrainer({activetrainerCard}) {
  return (
    <div className="w-full max-w-md py-2  bg-white rounded-lg shadow-md   dark:bg-gray-800 dark:border-gray-700 fc-activity-card">
        <div className="flex items-center justify-between mb-1 p-4">
            <h5 className="text-xl font-bold leading-none theme-primary dark:text-white">Active Trainers</h5>
            <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                View all
            </a>
        </div>
        <div className="flow-root relative">
           <ul role="list" className=" dark:divide-gray-700 "> 
              {activetrainerCard.map((item) => (
                  <li className="px-2 sm:py-2 hover:bg-slate-200 fc-activity-card-li">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-11 h-11 rounded-full" src={item.imgsrc}  alt="Neil image" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h5 className="text-primary">
                                    {item.name}
                                </h5>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base theme-primary dark:text-white">
                                <div className="text-cyan border-solid border-2 rounded-full px-2 m-0 border-cyan ..."><p>online</p></div>
                            </div>
                        </div>
                    </li>                      
                  ))}
             </ul>
        </div>
    </div>
  )
}
