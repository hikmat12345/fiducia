import React from 'react';
import './DashboardMainPage.scss';
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
  const { Header, Content, Footer, Sider } = Layout;

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem(<a href='/'>Home</a>,'1' ),
    getItem(<a href='/categories'>Categories</a>, '2'), 
    getItem(<a href='booking-schedule'>Booking Scheduled</a>, '3'),
    getItem(<a href='/alert-center'>Alert Center</a>, '4'),
    getItem(<a href='/'>Products</a>, '5'),
    getItem(<a href='/'>Users</a>, '6'),
    getItem(<a href='/'>Promotions</a>, '7'),
    getItem(<a href='/'>Manage Promotion</a>, '8'), 
    getItem(<a href='/'>Another title</a>, '9'), 
    getItem(<a href='/'>Users</a>, '10'),
  ];
 

function DashboardMainPage(props) {

    const {
        token: { colorBgContainer },
      } = theme.useToken();
  return (
    <>
        <Layout hasSider className='text-primary'>
                <Sider
                    className='fc-sider'
                    style={{
                    overflow: 'auto',
                    height: '100vh',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    textAlign: 'center',
                    justifyContent: 'center',
                 }} >
                  <img className='pt-14' src={getFileSrcFromPublicFolder("Group 9112.svg")} alt="titleLogo" style={{ widht: '200px', height: '100px'}}/>
                  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} className="fc-sider-menu-items  pt-10" />
                </Sider>
                <Layout
                 className="site-layout pb-8 w-full">
                
                <Content className='fc-home-content'>
                      <Header className="fc-header">
                      <img src={getFileSrcFromPublicFolder("SLIM-S~2.PNG")} alt="profileimg" className="w-9"/><FCText className='fc-head-text'>Ahmed Sayed</FCText><NotificationPopup/>
                    </Header>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    </>
  )
}

export default DashboardMainPage
