import React from 'react';
import './AlertCenterCard.scss';

function AlertCenterCard() {
  return (
    <>
        <div className='flex flex-row gap-0 align-center py-4'>
            <div className='text-start'>
                <label for="checkbox-2" className="ml-2 text-sm font-medium text-darkgray">Active filters</label>
                <span id="badge-dismiss-red" className="inline-flex items-center px-2 py-1 ml-4 text-sm font-medium text-darkgray bg-white rounded shadow">
                    Reports
                <button type="button" className="inline-flex items-center p-0.5 ml-2 text-sm text-darkgray bg-white bg-transparent rounded-lg hover:bg-red-200 hover:text-red-900 dark:hover:bg-red-800 dark:hover:text-red-300" data-dismiss-target="#badge-dismiss-red" aria-label="Remove">
                    <svg aria-hidden="true" className="w-3.5 h-3.5 text-red" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Remove badge</span>
                </button>
                </span>
            </div>  
            <div className='ml-auto flex items-center mb-4'>
                <label for="checkbox-2" className="ml-2 text-sm font-medium text-darkgray">Mark All</label>
                <input id="checkbox-2" type="checkbox" value="" class="w-4 h-4 ml-4 shadow text-black bg-white rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2"></input>
            </div>    
        </div>
    </>
  )
}

export default AlertCenterCard
