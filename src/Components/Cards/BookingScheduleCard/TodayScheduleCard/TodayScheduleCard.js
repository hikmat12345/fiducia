import React from 'react';
import './TodayScheduleCard.scss';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { getFileSrcFromPublicFolder } from '../../../../utils';


function TodayScheduleCard({rowData}) {
 
const [open, setOpen] = React.useState(false);


            
    return (
      <>
          <div className='flex px-8 gap-3 text-gray flex-row w-full'>
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table" sx={{border: 'none'}}>
                <TableHead className='fc-todayschedule-tabel-head'>
                  <TableRow>
                    <TableCell align="left"><h5 className='text-darkgray'>Trainer</h5></TableCell>
                    <TableCell align="left"><h5 className='text-darkgray'>Customer</h5></TableCell>
                    <TableCell align="left"><h5 className='text-darkgray'>Categorie</h5></TableCell>
                    <TableCell align="left"><h5 className='text-darkgray'>Studio</h5></TableCell>
                    <TableCell align="left"><h5 className='text-darkgray'>From</h5></TableCell>
                    <TableCell align="left"><h5 className='text-darkgray'>To</h5></TableCell>
                    <TableCell align="left"><h5 className='text-darkgray'>Status</h5></TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowData.map((row) => (
                    <> 
                    <TableRow sx={{'& > *': { borderBottom: 'unset'} }}>
                         <TableCell component="th" scope="row">
                               <>
                                 <div className='justify-content-center fc-table-inside-row'>
                                   <div><img className='w-8' src={row.trainerSrcLink} alt="table-img1"/></div>
                                     <div><p className='p-2 text-black bold'>{row.trainerName}</p>
                                   </div>
                                 </div>
                               </>
                         </TableCell>
                         <TableCell align="left">
                               <>
                                <div className='justify-content-center fc-table-inside-row'>
                                  <div><img className='w-8' src={row.customerimg} alt="table-img1"/></div>
                                    <div><p className='p-2 text-black bold'>{row.customerName}</p>
                                  </div>
                                </div>
                              </>
                         </TableCell>
                         <TableCell align="left"><><p className='text-black bold'>{row.categoriename}</p></></TableCell>
                         <TableCell align="left"><p className='text-black bold'>{row.studio}</p></TableCell>
                         <TableCell align="left"><p className='text-black bold'>{row.timefrom}</p></TableCell>
                         <TableCell align="left"><p className='text-black bold'>{row.timeto}</p></TableCell>
                         <TableCell align="left"><p className={`${row.status =='Active'? 'text-cyan bold' : row.status == 'Cancelled'? 'text-red bold': 'text-black bold'}`}>{row.status}</p></TableCell>
                 
                         <TableCell align="center">
                         {open ==true ? <Button id="fc-edit-btn" sx={{border: '1px', borderColor: 'black', px : 3,}}><p className=''>Save</p></Button>
                                :
                              <Button id="fc-edit-btn" sx={{border: '1px', borderColor: 'black', px : 4}}><p className=' border-black bg-white'>Edit</p></Button>
                           }
                           <IconButton
                             aria-label="expand row"
                             size="small"
                             onClick={() => setOpen(!open)}
                           >
                             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                           </IconButton>
                         </TableCell>
                    </TableRow>
                   
                    <TableRow>
                      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                          <Box sx={{ margin: 0 }}>
                            <Table size="small" aria-label="purchases">
                              <TableHead>
                                <TableRow>
                                  <TableCell align="left"><p className='text-bold text-black'>Change</p></TableCell>
                                  <TableCell align="left"><p className='text-bold text-black'>Change</p></TableCell>
                                  <TableCell align="left"><p className='text-bold text-black'>Change</p></TableCell>
                                  <TableCell align="left"><p className='text-bold text-black'>Change</p></TableCell>
                                  <TableCell align="left"><p className='text-bold text-black'>Change</p></TableCell>
                                  <TableCell align="left"><p className='text-bold text-black'>Change</p></TableCell>
                                  <TableCell align="left"><p className='text-bold text-black'>Change</p></TableCell>
                                  <TableCell align="left"></TableCell>
                                </TableRow>
                              </TableHead>
                              <TableBody>
                                  <TableRow>
                                      <TableCell align="left">
                                        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-darkgray  font-medium rounded-lg text-sm px-4 py-1 text-center inline-flex items-center shadow-lg" type="button">Mo. Ahmed<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" d="M19 9l-7 7-7-7"></path></svg></button>
                                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-24 dark:bg-gray-700">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                              <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                              </li>
                                              <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                              </li>
                                              <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                              </li>
                                            </ul>
                                        </div>
                                      </TableCell>
                                      <TableCell align="left">Change</TableCell>
                                      <TableCell align="left">
                                      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-darkgray  font-medium rounded-lg text-sm px-4 py-1 text-center inline-flex items-center shadow-lg" type="button">EMS Boxing<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" d="M19 9l-7 7-7-7"></path></svg></button>
                                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-24 dark:bg-gray-700">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                              <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                              </li>
                                              <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                              </li>
                                              <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                              </li>
                                            </ul>
                                        </div>
                                      </TableCell>
                                      <TableCell align="left">
                                      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-darkgray  font-medium rounded-lg text-sm px-4 py-1 text-center inline-flex items-center shadow-lg" type="button">2<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" d="M19 9l-7 7-7-7"></path></svg></button>
                                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-18 dark:bg-gray-700">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                              <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                              </li>
                                              <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                              </li>
                                              <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                              </li>
                                            </ul>
                                        </div>
                                      </TableCell>
                                      <TableCell align="left">Change</TableCell>
                                      <TableCell align="left">Change</TableCell>
                                      <TableCell align="left">
                                      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-darkgray  font-medium rounded-lg text-sm px-4 py-1 text-center inline-flex items-center shadow-lg" type="button">Upcoming<svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" d="M19 9l-7 7-7-7"></path></svg></button>
                                        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-24 dark:bg-gray-700">
                                            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                              <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                              </li>
                                              <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                              </li>
                                              <li>
                                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                              </li>
                                            </ul>
                                        </div>
                                      </TableCell>
                                      <TableCell />
                                  </TableRow>                 
                              </TableBody>
                            </Table>
                          </Box>
                        </Collapse>
                      </TableCell>
                      </TableRow>
                      </>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
      </>
    )
  }

export default TodayScheduleCard
    



  