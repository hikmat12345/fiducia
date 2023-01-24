import React from 'react'

function NewReportListCard({newReport}) {
  return (
    <>
      <div className='flex flex-row w-full bg-white rounded-lg'>
      <div className="flow-root relative">
        {newReport.map((item) => (
                <ul role="list" className="w-full dark:divide-gray-700 ">
                    <li className="px-4 sm:py-0 hover:bg-slate-200 fc-activity-card-li">
                        <div className='flex flex-row align-center w-full'>
                        <div className='flex flex-row align-center'>
                            <div><button className='rounded-full border-none bg-red w-2 h-2'></button></div>
                            <div><h4 className='bold'>New Report</h4> from Ahmed Saber</div>
                        </div>
                        <div className='ml-auto text-end flex flex-row align-center'>
                            <label for="checkbox-2" className="ml-2 text-sm font-medium text-darkgray">Mark All</label>
                            <input id="checkbox-2" type="checkbox" value="" class="w-4 h-4 ml-4 shadow text-black bg-white rounded focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2"></input>
                        </div>
                        </div>
                    </li>                      
                </ul>
                ))}
        </div>
      </div>
    </>
  )
}

export default NewReportListCard
