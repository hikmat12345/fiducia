import React from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function NotificationPopup() {
  return (
    <>
        <NotificationsNoneIcon className='hover hover:scale-110'
            onOutsideClick={() => {
                alert('You clicked outside of this component!!!');
            }}
            >
            Hello World
        </NotificationsNoneIcon> 
    </>
  )
}

export default NotificationPopup
