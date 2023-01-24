import React from 'react';
import './CategoriesPage.scss';
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
import DashboardMainPage from '../DashboardMainPage/DashboardMainPage';
  const { Header, Content, Footer, Sider } = Layout;

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }



function CategoriesPage() {

  return (
      <>
        <DashboardMainPage>
          <div className='fc-home-title-text bold pb-4'>
              <h1>Categories</h1>
              <div className='text-end  align-baseline'>
                  <a href='#'><SearchOutlined className='bg-white rounded-full py-3 px-4 text-xl shadow-md hover hover:scale-105'/></a>
                  <button class="rounded-lg bg-white mx-4 py-1 px-7 shadow-md hover hover:scale-105"><h3>Add New</h3></button>
              </div>
          </div>
              {/* flex-wrap means automaticaly push to bottom when go to mobile or teblate  */}
              <div className="flex flex-row align-center gap-3">
                  {/* means 50%  column*/}
                  <div className='basis-3/3 flex-wrap'> 
                      <EMSBoxing/>
                      {/* <ActiveTrainerCard/> */}
                  </div>
              </div>
              <DetailEMSBoxingCard/>  
        </DashboardMainPage>
    </>
  )
}

export default CategoriesPage
