import React from 'react';
import './HomePage.scss';
import { Layout, Menu, theme, Avatar,} from 'antd';
import LastActivity from '../../Components/Cards/LastActivityCard/LastActivity';
import Messages from '../../Components/Cards/Messages/Messages';
import AwaitingAprovel from '../../Components/Cards/AwaitingAprovel/AwaitingAprovel';
import ActiveTrainer from '../../Components/Cards/ActiveTrainer/ActiveTrainer';
import ActiveStudio from '../../Components/Cards/ActiveStudio/ActiveStudio';
import DashboardMainPage from '../DashboardMainPage/DashboardMainPage';
import { getFileSrcFromPublicFolder } from '../../utils'

function HomePage() {

    const listitemactivetrainer = [{
          imgsrc : getFileSrcFromPublicFolder("icons/girl-icon.PNG"),
          name : 'Dr. Yousaf',
          description : 'Studio 2',
          },
          {
            imgsrc : getFileSrcFromPublicFolder("icons/girl-icon.PNG"),
            name : 'Gada Osman',
            description : 'Studio 1',
            },
            {
              imgsrc : getFileSrcFromPublicFolder("icons/girl-icon.PNG"),
              name : 'Mo. Ahmed',
              description : 'Studio 3',
              },
              {
                imgsrc : getFileSrcFromPublicFolder("icons/girl-icon.PNG"),
                name : 'Walaa Waly',
                description : 'No place',
                }
        ]

    const listitemmessages = [{
        imgsrc : getFileSrcFromPublicFolder("icons/boy-icon-2.PNG"),
        name : "Dr. Walaa",
        disrciption : 'Lorem ipsum is simply dummy',
        time : '02:30pm',
        totalreply : '2'
        },
        {
          imgsrc : getFileSrcFromPublicFolder("icons/girl-icon.PNG"),
          name : "Gada Osman",
          disrciption : 'Lorem ipsum is simply dummy',
          time : '02:30pm',
          totalreply : '3'
        },
        {
          imgsrc : getFileSrcFromPublicFolder("icons/boy-icon-2.PNG"),
          name : "Mo. Ahmed",
          disrciption : 'Lorem ipsum is simply dummy',
          time : '02:30pm',
          totalreply : '1'
        }  
      ]

    const listitemawaiting = [
      { imgsrc : getFileSrcFromPublicFolder("icons/girl-icon.PNG"),
        name : 'C.Walaa',
        description : 'checked in 3m'
      },
      { imgsrc : getFileSrcFromPublicFolder("icons/girl-icon.PNG"),
        name : 'Dr. Hossain',
        description : 'checked in 3m'
      },
      { imgsrc : getFileSrcFromPublicFolder("icons/girl-icon.PNG"),
        name : 'C.Fayouz',
        description : 'Signed as CIB m'
      },
      { imgsrc : getFileSrcFromPublicFolder("icons/girl-icon.PNG"),
        name : 'C.Walaa Waly',
        description : 'Updated the se ..'
      }
    ]



  return (
    <>
          <DashboardMainPage>
                  <div className='fc-home-title-text bold pb-2'>
                      <h1>Homepage</h1>
                      <h2>Welcome Mr. Ahmed</h2>
                    </div>
                       {/* flex-wrap means automaticaly push to bottom when go to mobile or teblate  */}
                  <div className="flex flex-row align-center gap-3">
                     {/* means 50%  column*/}
                      <div className='basis-2/3 flex-wrap'> 
                         <LastActivity/>
                          {/* <ActiveTrainerCard/> */}
                      </div>
                      {/* means 50%  column */}
                      <div className='basis-1/3 flex-wrap'>
                        <ActiveTrainer activetrainerCard = {listitemactivetrainer} />
                      </div> 
                  </div>

                  <div class="flex flex-row gap-5">
                     {/* means 50%  column*/}
                            <div className='basis-1/3'>
                              <Messages messageCard = {listitemmessages} />
                            </div>
                            <div className='basis-1/3'>
                              <AwaitingAprovel awaitingCard = {listitemawaiting} />
                            </div>
                            {/* <ActiveTrainerCard/> */}
                            {/* means 50%  column */}
                            <div className='basis-1/3'>
                              <ActiveStudio />
                            </div> 
                  </div>
                </DashboardMainPage> 
       </>
    )
}

export default HomePage
