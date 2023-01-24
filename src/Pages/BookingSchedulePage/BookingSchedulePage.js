import React from 'react';
import './BookingSchedulePage.scss';
import FCText from '../../Components/FCText/FCText';
import Title from 'antd/lib/typography/Title';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UploadOutlined,
    BellOutlined,
    SearchOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu, theme, Avatar,} from 'antd';
import { CenterFocusStrong } from '@mui/icons-material';
import { getFileSrcFromPublicFolder } from '../../utils';
import LastActivity from '../../Components/Cards/LastActivityCard/LastActivity';
import Messages from '../../Components/Cards/Messages/Messages';
import AwaitingAprovel from '../../Components/Cards/AwaitingAprovel/AwaitingAprovel';
import ActiveTrainer from '../../Components/Cards/ActiveTrainer/ActiveTrainer';
import ActiveStudio from '../../Components/Cards/ActiveStudio/ActiveStudio';
import NotificationPopup from '../../Components/Cards/NotificationPopup/NotificationPopup';
import EMSBoxing from '../../Components/Cards/EMSBoxing/EMSBoxing';
import DetailEMSBoxingCard from '../../Components/Cards/DetailEMSBoxingCard/DetailEMSBoxingCard';
import BranchLocationOption from '../../Components/Cards/BookingScheduleCard/BranchLocationOption';
import CalendarDateCard from '../../Components/Cards/BookingScheduleCard/CalendarDateCard';
import ChooseTrainerCard from '../../Components/Cards/BookingScheduleCard/ChooseTrainerCard';
import DashboardMainPage from '../DashboardMainPage/DashboardMainPage';
import TodayScheduleCard from '../../Components/Cards/BookingScheduleCard/TodayScheduleCard/TodayScheduleCard';
  
function BookingSchedulePage() {

  const rows = [
    { 
      trainerSrcLink: getFileSrcFromPublicFolder("SLIM-S~2.PNG"),
      trainerName: 'Waly Waala',
      customerimg: getFileSrcFromPublicFolder("Claire-Barnett@2x.PNG"),
      customerName: 'Rania Gala',
      categoriename: 'EMS Boxing',
      studio: 3,
      timefrom: '04:30pm',
      timeto: '05:30am',
      status: 'Upcoming',
    },
    { 
      trainerSrcLink: getFileSrcFromPublicFolder("SLIM-S~2.PNG"),
      trainerName: 'Waly Waala' ,
      customerimg: getFileSrcFromPublicFolder("Claire-Barnett@2x.PNG"),
      customerName: 'Rania Gala' ,
      categoriename: 'EMS Boxing' ,
      studio: 4 ,
      timefrom: '04:30pm',
      timeto: '05:30am',
      status: 'Cancelled',
    
  },
  { 
    trainerSrcLink: getFileSrcFromPublicFolder("SLIM-S~2.PNG"),
    trainerName: 'Waly Waala' ,
    customerimg: getFileSrcFromPublicFolder("Claire-Barnett@2x.PNG"),
    customerName: 'Rania Gala' ,
    categoriename: 'EMS Boxing' ,
    studio: 4 ,
    timefrom: '04:30pm',
    timeto: '05:30am',
    status: 'Cancelled',
  
  },
  { 
    trainerSrcLink: getFileSrcFromPublicFolder("SLIM-S~2.PNG"),
    trainerName: 'Waly Waala' ,
    customerimg: getFileSrcFromPublicFolder("Claire-Barnett@2x.PNG"),
    customerName: 'Rania Gala' ,
    categoriename: 'EMS Boxing' ,
    studio: 1 ,
    timefrom: '04:30pm',
    timeto: '05:30am',
    status: 'Active',
  
  },
  { 
    trainerSrcLink: getFileSrcFromPublicFolder("SLIM-S~2.PNG"),
    trainerName: 'Waly Waala' ,
    customerimg: getFileSrcFromPublicFolder("Claire-Barnett@2x.PNG"),
    customerName: 'Rania Gala' ,
    categoriename: 'EMS Boxing' ,
    studio: 1 ,
    timefrom: '04:30pm',
    timeto: '05:30am',
    status: 'UpComing',

  },
]
  return (
    <>
        <DashboardMainPage>
            <div className='bold pb-4'>
                <h1>Booking Schedule</h1>
            </div>
                {/* flex-wrap means automaticaly push to bottom when go to mobile or teblate  */}
                <div className="flex flex-row align-center gap-10">
                    {/* means 50%  column*/}
                    <div className='basis-3/6 sm:basis-6/6 md:basis-3/6 flex-wrap'> 
                        <BranchLocationOption titletext="Choose Branch Location"/>
                        <CalendarDateCard/>
                    </div>
                    <div className='basis-3/6 sm:basis-6/6 md:basis-3/6 flex-wrap'> 
                        <BranchLocationOption titletext="Choose Categorie"/>
                        <ChooseTrainerCard />
                    </div>
                </div>
             <h4 className='text-darkgray px-4 py-3'>Today's session</h4>
             <TodayScheduleCard rowData={rows}/>
        </DashboardMainPage >
    </>
  )
}

export default BookingSchedulePage
