import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import TodayIcon from '@mui/icons-material/Today';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SummarizeIcon from '@mui/icons-material/Summarize';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import CancelIcon from '@mui/icons-material/Cancel';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import EditIcon from '@mui/icons-material/Edit';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    BellOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';

import './LastActivityCard.scss';


  

function LastActivity() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
  return (
    <>
        <div className='card-activity-calendar'>
            <div className='card-activity-title'>
                <div><h5 className="text-xl font-bold leading-none theme-primary dark:text-white">Last Activity</h5></div>
                <div>
                    <ul>
                        <li>
                            <span className="text-black text-center inline-block py-1 px-4 rounded-full bg-cyan ">
                               <h4>Today</h4>
                            </span>
                        </li>
                        <li><span className="text-black text-center inline-block py-1 px-4  rounded-full bg-gray "><h4>Yesterday</h4></span></li>
                        <li><span className="text-black text-center inline-block  py-1.5 px-1.5  rounded-full bg-gray w-20"><TodayIcon style={{fontSize: '15px', color: '#7F8FA4'}}/></span></li>
                    </ul>
                </div> 
            </div>
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <List component="nav" aria-label="main mailbox folders" className='fc-title-card-list ' style={{display: 'flex'}}>
                    <ListItemButton
                    className='px-8'
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    >
                    <div>
                        <SummarizeIcon  />
                    </div>
                    <div><h5 className='pl-4'>New Reports from Ahmed</h5></div>
                    <div className='fc-mailbox ml-auto'><p>12:29 am</p></div>
                    </ListItemButton>   
                </List>
                <List component="nav" aria-label="main mailbox folders" className='fc-title-card-list' style={{display: 'flex'}}>
                    <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    >
                    <div>
                        <TaskAltIcon sx={{color: '#3D7DE5'}}/>
                    </div>
                    <div><h5 className='pl-4'>Ghada Osman Checked in at 3:45am</h5></div>
                    <div className='fc-mailbox ml-auto'><p>12:29 am</p></div>
                    </ListItemButton>   
                </List>
                <List component="nav" aria-label="main mailbox folders" className='fc-title-card-list' style={{display: 'flex'}}>
                    <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    >
                    <div>
                        <CancelIcon sx={{color: '#FF6A86'}}/>
                    </div>
                    <div><h5 className='pl-4'>Ahmed Cancelled 3:00pm session</h5></div>
                    <div className='fc-mailbox ml-auto'><p>12:29 am</p></div>
                    </ListItemButton>   
                </List>
                <List component="nav" aria-label="main mailbox folders" className='fc-title-card-list' style={{display: 'flex'}}>
                    <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    >
                    <div>
                        <NotificationsNoneIcon/>
                    </div>
                    <div><h5 className='pl-4'>You suspended user "Ahmed Khaled"</h5></div>
                    <div className='fc-mailbox ml-auto'><p>12:29 am</p></div>
                    </ListItemButton>   
                </List>
                <List component="nav" aria-label="main mailbox folders" className='fc-title-card-list' style={{display: 'flex'}}>
                    <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                    >
                    <div>
                        <EditIcon/>
                    </div>
                    <div><h5 className='pl-4'>Yoga Product updated by Adel Alsagr</h5></div>
                    <div className='fc-mailbox ml-auto'><p>12:29 am</p></div>
                    </ListItemButton>   
                </List>
            </Box>
      </div>
    </>
  )
}

export default LastActivity
