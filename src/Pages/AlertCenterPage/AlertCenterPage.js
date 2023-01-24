import React from 'react';
import './AlertCenterPage.scss';
import {
    SearchOutlined,
  } from '@ant-design/icons';
import DashboardMainPage from '../DashboardMainPage/DashboardMainPage';
import AlertCenterCard from '../../Components/Cards/AlertCenterCard/AlertCenterCard';
import NewReportListCard from '../../Components/Cards/AlertCenterCard/NewReportListCard';
import { getFileSrcFromPublicFolder } from '../../utils'

function AlertCenterPage() {

    const listitemNewRecordCard = [{
            name : 'New Report',
            description : 'from Ahmed Sabeer',
            onlinetime : '2h ago',
        },
        {
            name : 'New Report',
            description : 'from Ahmed Sabeer',
            onlinetime : '2h ago',
        },
        {
            name : 'New Report',
            description : 'from Ahmed Sabeer',
            onlinetime : '2h ago',
        },
        {
            name : 'New Report',
            description : 'from Ahmed Sabeer',
            onlinetime : '2h ago',
        },
]
  return (
    <>
      <DashboardMainPage>
        <div className='px-6'>  
            <div className='bold pb-4'>
                <h1>Alert Center</h1>
            </div>
            <div className='flex flex-row w-full gap-0 align-center'>
                <div className='w-11/12 text-start'>
                <form className="flex items-center">   
                    <label for="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-darkgray" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 py-3 shadow-lg text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10  dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    </div>
                    
                </form>
                </div>
                <div className='w-1/12 text-end'>
                    <button type="submit" className="p-2 rounded-full shadow-lg text-sm bg-white font-medium text-darkgray align-center">   
                    <svg className='w-8 h-8 text-darkgray' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"></path>
                    </svg>
                    </button>
                </div>        
            </div>
            <AlertCenterCard/>
            <NewReportListCard newReport = {listitemNewRecordCard}/>
        </div>
               
      </DashboardMainPage>
    </>
  )
}

export default AlertCenterPage
