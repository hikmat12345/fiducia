import React from 'react'

function BranchLocationOption(props) {
  return (
    <>
        <button id="multiLevelDropdownButton" data-dropdown-toggle="dropdown" className="shadow-lg text-darkgray shadow w-full bg-white font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center dark:bg-blue-600" type="button">{props.titletext}<svg className="w-4 h-4 ml-auto text-primary" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="multiLevelDropdownButton">
                <li>
                    <a href="#" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                </li>
                <li>
                    <a href="#" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                </li>
                <li>
                    <a href="#" className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                </li>
                </ul>
            </div>
    </>
  )
}

export default BranchLocationOption
