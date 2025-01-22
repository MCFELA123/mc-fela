import React from 'react'
import { AvatarStack, Button, ClientMessage, Component, Icon, Inder, Indicator, InputText, Meter, MeterBar, Object, PageIndicator, SpaceBetween, Text, UserMessage, WindowStateControl } from '../../style'
import mcfela_icon from '../../icons/favico/favicon.png'
import user00 from '../../img/Avatar/00.jpeg'
import user01 from '../../img/Avatar/01.jpeg'
import user02 from '../../img/Avatar/02.jpeg'
import user03 from '../../img/Avatar/03.jpg'
import user04 from '../../img/Avatar/04.jpg'
import user05 from '../../img/Avatar/05.jpg'
import user06 from '../../img/Avatar/06.jpeg'
import user07 from '../../img/Avatar/07.jpeg'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export const Monica = () => {
    const percentage = 66;
    const sampleData = randomData(30);
    function boxMullerRandom () {
        let phase = false,
            x1, x2, w, z;
    
        return (function() {
    
            if (phase = !phase) {
                do {
                    x1 = 2.0 * Math.random() - 1.0;
                    x2 = 2.0 * Math.random() - 1.0;
                    w = x1 * x1 + x2 * x2;
                } while (w >= 1.0);
    
                w = Math.sqrt((-2.0 * Math.log(w)) / w);
                return x1 * w;
            } else {
                return x2 * w;
            }
        })();
    }
    function randomData(n = 30) {
        return Array.apply(0, Array(n)).map(boxMullerRandom);
    }
    function Aws() {
        const AvatarModules = document.querySelectorAll('.avatar-rand0')
        const AvatarRand1 = document.querySelector('.avatar-rand1')
        const AvatarRand2 = document.querySelector('.avatar-rand2')
        const AvatarRand3 = document.querySelector('.avatar-rand3')
        const AvatarRand4 = document.querySelector('.avatar-rand4')
        
        
        
        var moduleChange = [user00, user01, user02, user03, user04, user05, user06, user07];
        var randChange = [user07, user06, user05, user04, user03, user02, user01, user00];
        var randChange1 = [user04, user01, user06, user03, user00, user07, user02, user05];
        var randChange2 = [user05, user02, user07, user00, user01, user06, user03, user04];
        var randChange3 = [user06, user03, user00, user07, user01, user05, user02, user04];
        var randChange4 = [user04, user01, user06, user03, user00, user07, user01, user05];
          var randomModule = Math.floor(Math.random() * moduleChange.length);
          AvatarModules.forEach(element => {
            element.setAttribute(`style`, `background-image: url(${moduleChange[randomModule]})`)
            AvatarRand1.setAttribute(`style`, `background-image: url(${randChange[randomModule]})`)
            AvatarRand2.setAttribute(`style`, `background-image: url(${randChange1[randomModule]})`)
            AvatarRand3.setAttribute(`style`, `background-image: url(${randChange2[randomModule]})`)
            AvatarRand4.setAttribute(`style`, `background-image: url(${randChange3[randomModule]})`)
            console.log('Random avatars generated')
          });
        
    }
  return (
    <Component onLoad={Aws}>
    <Component size={100} className='d-center'>
        <Component size={93}>
        <PageIndicator className='page-indicator d-align'>
            {/* window state control */}
        <WindowStateControl>
        <Component className='d-align state-control'>
            <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#6c7885" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </Component>
        <Component className='d-align state-control' opacity={.5}>
            <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#6c7885" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </Component>
        </WindowStateControl>
        {/* window state control */}

        <Component className='d-align' ml={.5}>
            <Icon src={mcfela_icon} size={1.5} className='glow-img' />
        </Component>

        <SpaceBetween>/</SpaceBetween>

        <Indicator>
            <Inder><svg width={15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 17.0002H16M11.0177 2.76424L4.23539 8.03937C3.78202 8.39199 3.55534 8.5683 3.39203 8.7891C3.24737 8.98469 3.1396 9.20503 3.07403 9.4393C3 9.70376 3 9.99094 3 10.5653V17.8002C3 18.9203 3 19.4804 3.21799 19.9082C3.40973 20.2845 3.71569 20.5905 4.09202 20.7822C4.51984 21.0002 5.07989 21.0002 6.2 21.0002H17.8C18.9201 21.0002 19.4802 21.0002 19.908 20.7822C20.2843 20.5905 20.5903 20.2845 20.782 19.9082C21 19.4804 21 18.9203 21 17.8002V10.5653C21 9.99094 21 9.70376 20.926 9.4393C20.8604 9.20503 20.7526 8.98469 20.608 8.7891C20.4447 8.5683 20.218 8.39199 19.7646 8.03937L12.9823 2.76424C12.631 2.49099 12.4553 2.35436 12.2613 2.30184C12.0902 2.2555 11.9098 2.2555 11.7387 2.30184C11.5447 2.35436 11.369 2.49099 11.0177 2.76424Z" stroke="#6c7885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></Inder>
        <Component ml={.5}><Text size={.9}>Home</Text></Component>
        </Indicator>

        <SpaceBetween>/</SpaceBetween>

        <Indicator>
            <Inder><svg width={15} style={{scale:'1.3'}} viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.25 10.5C6.25 10.0858 5.91421 9.75 5.5 9.75C5.08579 9.75 4.75 10.0858 4.75 10.5H6.25ZM11.5 19.75C11.9142 19.75 12.25 19.4142 12.25 19C12.25 18.5858 11.9142 18.25 11.5 18.25V19.75ZM4.75 10.5C4.75 10.9142 5.08579 11.25 5.5 11.25C5.91421 11.25 6.25 10.9142 6.25 10.5H4.75ZM11.5 5.75C11.9142 5.75 12.25 5.41421 12.25 5C12.25 4.58579 11.9142 4.25 11.5 4.25V5.75ZM5.5 9.75C5.08579 9.75 4.75 10.0858 4.75 10.5C4.75 10.9142 5.08579 11.25 5.5 11.25V9.75ZM11.5 11.25C11.9142 11.25 12.25 10.9142 12.25 10.5C12.25 10.0858 11.9142 9.75 11.5 9.75V11.25ZM10.75 10.5C10.75 10.9142 11.0858 11.25 11.5 11.25C11.9142 11.25 12.25 10.9142 12.25 10.5H10.75ZM12.25 5C12.25 4.58579 11.9142 4.25 11.5 4.25C11.0858 4.25 10.75 4.58579 10.75 5H12.25ZM12.25 10.5C12.25 10.0858 11.9142 9.75 11.5 9.75C11.0858 9.75 10.75 10.0858 10.75 10.5H12.25ZM10.75 14C10.75 14.4142 11.0858 14.75 11.5 14.75C11.9142 14.75 12.25 14.4142 12.25 14H10.75ZM11.5 18.25C11.0858 18.25 10.75 18.5858 10.75 19C10.75 19.4142 11.0858 19.75 11.5 19.75V18.25ZM20.25 14C20.25 13.5858 19.9142 13.25 19.5 13.25C19.0858 13.25 18.75 13.5858 18.75 14H20.25ZM10.75 19C10.75 19.4142 11.0858 19.75 11.5 19.75C11.9142 19.75 12.25 19.4142 12.25 19H10.75ZM12.25 14C12.25 13.5858 11.9142 13.25 11.5 13.25C11.0858 13.25 10.75 13.5858 10.75 14H12.25ZM11.5 4.25C11.0858 4.25 10.75 4.58579 10.75 5C10.75 5.41421 11.0858 5.75 11.5 5.75V4.25ZM18.75 14C18.75 14.4142 19.0858 14.75 19.5 14.75C19.9142 14.75 20.25 14.4142 20.25 14H18.75ZM19.5 14.75C19.9142 14.75 20.25 14.4142 20.25 14C20.25 13.5858 19.9142 13.25 19.5 13.25V14.75ZM11.5 13.25C11.0858 13.25 10.75 13.5858 10.75 14C10.75 14.4142 11.0858 14.75 11.5 14.75V13.25ZM4.75 10.5L4.75 15H6.25L6.25 10.5H4.75ZM4.75 15C4.75 17.6234 6.87665 19.75 9.5 19.75V18.25C7.70507 18.25 6.25 16.7949 6.25 15H4.75ZM9.5 19.75H11.5V18.25H9.5V19.75ZM6.25 10.5V9H4.75V10.5H6.25ZM6.25 9C6.25 7.20507 7.70507 5.75 9.5 5.75V4.25C6.87665 4.25 4.75 6.37665 4.75 9H6.25ZM9.5 5.75H11.5V4.25H9.5V5.75ZM5.5 11.25H11.5V9.75H5.5V11.25ZM12.25 10.5V5H10.75V10.5H12.25ZM10.75 10.5V14H12.25V10.5H10.75ZM11.5 19.75H15.5V18.25H11.5V19.75ZM15.5 19.75C18.1234 19.75 20.25 17.6234 20.25 15H18.75C18.75 16.7949 17.2949 18.25 15.5 18.25V19.75ZM20.25 15V14H18.75V15H20.25ZM12.25 19V14H10.75V19H12.25ZM11.5 5.75H15.5L15.5 4.25H11.5V5.75ZM15.5 5.75C17.2949 5.75 18.75 7.20507 18.75 9L20.25 9C20.25 6.37665 18.1234 4.25 15.5 4.25L15.5 5.75ZM18.75 9V14H20.25V9L18.75 9ZM19.5 13.25H11.5V14.75H19.5V13.25Z" fill="#6c7885"></path> </g></svg></Inder>
        <Component ml={.5}><Text size={.9}>Projects</Text></Component>
        </Indicator>

        <SpaceBetween>/</SpaceBetween>

        <Indicator>
        <Component><Text size={.9} className='col-link'>#Monica</Text></Component>
        </Indicator>
        </PageIndicator>
        <br /><br /><br />
        <Component className='d-flex title-span'>
        <Component size={50} className='d-align span-title'>
            <Text className='text-primary' size={1.5}>Project 
                <svg width={20}  style={{scale:'1.9',transform:'translateY(1.5px)',paddingLeft:'7px',paddingRight:'7px'}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#39404b" stroke-width="0.648"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 9.5C13.3807 9.5 14.5 10.6193 14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5Z" fill="#39404b"></path> </g></svg>
            <Text opacity={.5}>#Landing</Text>
            </Text>
            <Component className='progress-text bg-success'>
                <Text >In progress</Text>
            </Component>
        </Component>
        <Component size={50}  className='d-justify-end d-align span-title'>
            <Component className='avatars d-align'>
            <AvatarStack/>
            <AvatarStack className='avatar-rand0 avatar-modules'/>
            <AvatarStack className='avatar-rand1 avatar-modules'/>
            <AvatarStack className='avatar-rand2 avatar-modules'/>
            <AvatarStack className='avatar-rand3 avatar-modules'/>
            {/* <AvatarStack className='avatar-rand4 avatar-modules'/> */}
            <AvatarStack className='d-center bg-blue' style={{padding:'10px'}}>
                <Text className='col-white'>+3</Text>
            </AvatarStack>
            <Component ml={.5}>
                <Text className='pointer col-link' size={.9}>View all</Text>
            </Component>
            </Component>
        </Component>
        </Component>
        
        <br />

        <Component className='d-flex'>
        <Component size={65} className='section-span'>
        <Component className="d-flex d-flex-770-query">
        <Component size={100} className='d-justify-start'>
        <Object className='d-grid' size={100}>
            <Text className="text-primary" size={1.2}>Project description</Text>
            <br />
            <Text lnh={1.3} size={.85}>Development of a web platform aimed
                at providing information about real estate
                available for sale and rent.</Text>
        </Object>
        </Component>
        <br className='d-flex-770-query-break' hidden/>
        <Component px={.6}/>
        <Component size={100} className='d-justify-end'>
        <Object className='d-grid' size={100}>
            <div className="d-flex">
            <Component size={100} className='d-justify-start'>
            <Text className="text-primary" size={1.2}>Due date</Text>
            </Component>
            <Component className='d-justify-end' mt={-1}>
            <svg width={18} opacity={.7} className='span-option pointer' viewBox="0 0 24 24" fill="#6c7885" xmlns="http://www.w3.org/2000/svg" stroke="#6c7885" stroke-width="0.336" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-More"> <path d="M12,16a2,2,0,1,1-2,2A2,2,0,0,1,12,16ZM10,6a2,2,0,1,0,2-2A2,2,0,0,0,10,6Zm0,6a2,2,0,1,0,2-2A2,2,0,0,0,10,12Z" id="Vertical"></path> </g> </g> </g></svg>
            </Component>
            </div>
                <br />
                <MeterBar className='meter-bar'>
                    <Meter count={37} className='meter'/>
                </MeterBar>
                <Component className='d-flex due-under'>
                <Component size={50} className='d-justify-start'>
                    <Text size={.7} className='text-primary'>37% Time spent</Text>
                </Component>
                <Component size={50} className='d-justify-end'>
                <Text size={.7}>Fri, 02/17</Text>
                </Component>
                </Component>
            </Object>
        </Component>
        </Component>
        <br />
        <Component className="d-flex d-flex-870-query">
        <Component size={100} className='d-justify-start'>
        <Object className='d-grid' size={100}>
        <div className="d-flex">
            <Component size={100} className='d-justify-start'>
            <Text className="text-primary" size={1.2}>Project progress</Text>
            </Component>
            <Component className='d-justify-end'>
            <svg width={18} opacity={.7} className='span-option pointer' viewBox="0 0 24 24" fill="#6c7885" xmlns="http://www.w3.org/2000/svg" stroke="#6c7885" stroke-width="0.336" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-More"> <path d="M12,16a2,2,0,1,1-2,2A2,2,0,0,1,12,16ZM10,6a2,2,0,1,0,2-2A2,2,0,0,0,10,6Zm0,6a2,2,0,1,0,2-2A2,2,0,0,0,10,12Z" id="Vertical"></path> </g> </g> </g></svg>
            </Component>
        </div>
        <br />
        <Component className="d-flex d-justify">
        <Component className='progress-bar d-grid-justify'>
            <div className='d-justify'><Text size={.8}>Design</Text></div>
        <Component mt={.35}><CircularProgressbar value={70} text={`${70}%`}
         styles={buildStyles({pathColor:'#005eff',textColor:'#005eff',trailColor:'#006aff25'})} strokeWidth={13}/></Component>
        </Component>

        <Component className='progress-bar d-grid-justify'>
            <div className='d-justify'><Text size={.8}>Frontend</Text></div>
        <Component mt={.35}><CircularProgressbar value={35} text={`${35}%`}
         styles={buildStyles({pathColor:'#ff5e00',textColor:'#ff5e00',trailColor:'#ff5e0025'})} strokeWidth={13}/></Component>
        </Component>

        <Component className='progress-bar d-grid-justify'>
            <div className='d-justify'><Text size={.8}>Backend</Text></div>
        <Component mt={.35}><CircularProgressbar value={15} text={`${15}%`}
         styles={buildStyles({pathColor:'#9800df',textColor:'#9800df',trailColor:'#9800df25'})} strokeWidth={13}/></Component>
        </Component>
        </Component>
        <br /><br />
        <Text size={.8}>Daily Tasks Done</Text>
        <Component mt={.6}>
        <Text size={1.1} className='text-primary bold'>17 <Text size={1} opacity={.5}>/ </Text> 23 </Text>
        <div>
        <MeterBar className='meter-bar' mt={.4}>
            <Meter count={74} className='meter'/>
        </MeterBar>
        <Component className='d-flex' mt={.4}>
        <Component className='d-justify-start'>
            <Text size={.7} className='text-primary'>74% Done</Text>
        </Component>
        </Component>
        </div>
        </Component><br />
        {/* <Button className='btn-secondary d-center' radius={.4}>
            <Text size={.9} className='ltsp-03'>View detailed info</Text>
        </Button> */}
        </Object>
        </Component>

        <Component px={.6}/>
        <br className='d-flex-870-query-break' hidden/>

        <Component className="d-grid" size={100}>
            <Component size={100} className='d-flex'>
            <Component size={100} className='d-justify-start'>
                <Object className='bg-blue' size={100}>
                <Text size={.9}>Productivity</Text>
          <br /><br />
          <Component className='d-flex'>
          <Sparklines data={sampleData}>
        <SparklinesLine style={{ fill: "none",stroke:'#ffffff',strokeWidth:'5' }} />
        <SparklinesSpots />
        </Sparklines>
          </Component>
          <Component mt={1} className="d-justify-end pointer">
          <svg width={20} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width=".8" transform="matrix(-1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2179 8.02261C20.0109 6.77783 18.2425 6 16 6H9.00002C8.44773 6 8.00002 6.44772 8.00002 7C8.00002 7.55228 8.44773 8 9.00002 8H16C17.7576 8 18.9892 8.59717 19.7821 9.41489C20.5864 10.2444 21 11.3629 21 12.5C21 13.6371 20.5864 14.7556 19.7821 15.5851C18.9892 16.4028 17.7576 17 16 17H8.41422L11.7071 13.7071C12.0977 13.3166 12.0977 12.6834 11.7071 12.2929C11.3166 11.9024 10.6834 11.9024 10.2929 12.2929L5.29289 17.2929C5.10536 17.4804 5 17.7348 5 18C5 18.2652 5.10536 18.5196 5.29289 18.7071L10.2929 23.7071C10.6834 24.0976 11.3166 24.0976 11.7071 23.7071C12.0977 23.3166 12.0977 22.6834 11.7071 22.2929L8.41422 19H16C18.2425 19 20.0109 18.2222 21.2179 16.9774C22.4136 15.7444 23 14.1129 23 12.5C23 10.8871 22.4136 9.25563 21.2179 8.02261Z" fill="#ffffff"></path> </g></svg>
          </Component>
                </Object>
            </Component>

        <Component px={.6}/>

        <Component size={100} className='d-justify-end'>
        <Object className='bg-blue pad-3-7-3-7' size={100}>
        <div className="d-flex">
        <Component size={100} className='d-justify-start'>
        <Text size={.9}>Upcoming <br />Events</Text>
        </Component>
        <Component className='d-justify-end' mt={-1}>
        <svg width={18} className='span-option pointer' viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg" stroke="#6c7885" stroke-width="0.336" transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="F-More"> <path d="M12,16a2,2,0,1,1-2,2A2,2,0,0,1,12,16ZM10,6a2,2,0,1,0,2-2A2,2,0,0,0,10,6Zm0,6a2,2,0,1,0,2-2A2,2,0,0,0,10,12Z" id="Vertical"></path> </g> </g> </g></svg>
        </Component>
        </div>
        <Component mt={.4}>
        <Text size={.7} opacity={.7}>Monday, 03/18</Text><br />
        <Text size={.7}>14:00 - 15:00</Text>
        </Component>
        <Component className="d-justify-end d-align-end pointer">
          <svg width={20} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width=".8" transform="matrix(-1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.2179 8.02261C20.0109 6.77783 18.2425 6 16 6H9.00002C8.44773 6 8.00002 6.44772 8.00002 7C8.00002 7.55228 8.44773 8 9.00002 8H16C17.7576 8 18.9892 8.59717 19.7821 9.41489C20.5864 10.2444 21 11.3629 21 12.5C21 13.6371 20.5864 14.7556 19.7821 15.5851C18.9892 16.4028 17.7576 17 16 17H8.41422L11.7071 13.7071C12.0977 13.3166 12.0977 12.6834 11.7071 12.2929C11.3166 11.9024 10.6834 11.9024 10.2929 12.2929L5.29289 17.2929C5.10536 17.4804 5 17.7348 5 18C5 18.2652 5.10536 18.5196 5.29289 18.7071L10.2929 23.7071C10.6834 24.0976 11.3166 24.0976 11.7071 23.7071C12.0977 23.3166 12.0977 22.6834 11.7071 22.2929L8.41422 19H16C18.2425 19 20.0109 18.2222 21.2179 16.9774C22.4136 15.7444 23 14.1129 23 12.5C23 10.8871 22.4136 9.25563 21.2179 8.02261Z" fill="#ffffff"></path> </g></svg>
          </Component>
        </Object>
        </Component>
        
        </Component>
        <Component size={100} mt={1} className='d-flex'>
            <Object size={100}>
            <br /><br /><br /><br /><br /><br />
            </Object>
        </Component>
        </Component>
        </Component>
        
        </Component>
        <Component px={.6}/>
        <Component size={35} className='d-justify-end section-span'>
            <Component className='object-bg bg-primary' overflow={'hidden'} radius={.7}  size={100}>
            <Component style={{height:'9%'}} px={1} className='bg-white outline d-align card-message-container'>
                <Component size={50} ml={-.1} className='d-justify-start'>
                    <Text size={.9} className='text-primary'>Team Chat</Text>
                </Component>
                <Component size={50} className='d-justify-end chat-control'>
                <svg width={18} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.9844 10H17M20.9844 10V6M20.9844 10L17.6569 6.34315C14.5327 3.21895 9.46734 3.21895 6.34315 6.34315C3.21895 9.46734 3.21895 14.5327 6.34315 17.6569C9.46734 20.781 14.5327 20.781 17.6569 17.6569C18.4407 16.873 19.0279 15.9669 19.4184 15" stroke="#6c7885" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <svg width={15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9" stroke="#6c7885" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M15 2H17.5C19.99 2 22 4.01 22 6.5V9" stroke="#6c7885" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 16V17.5C22 19.99 19.99 22 17.5 22H16" stroke="#6c7885" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path> <path opacity="0.4" d="M9 22H6.5C4.01 22 2 19.99 2 17.5V15" stroke="#6c7885" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                <svg width={15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.6" d="M2 22L9 15M9 15H3.14286M9 15V20.8571" stroke="#6c7885" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M22 2L15 9M15 9H20.8571M15 9V3.14286" stroke="#6c7885" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </Component>
            </Component>
            <Component style={{height:'82%'}} overflow={'auto'} className='card-message-container'>
            <Component className='pad-10'>
            <Component className='d-justify-end'>
            <UserMessage><Text size={.8}>I love this project! </Text></UserMessage>
            </Component>
            
            <Component className='d-justify-start'>
            <ClientMessage><Text size={.8}>Good day, sorry for the late <br />reply, we are happy to be at<br /> your service.</Text></ClientMessage>
            </Component>

            <Component className='d-justify-end'>
            <UserMessage><Text size={.8}>No problem.. i'll check for more!!</Text></UserMessage>
            </Component>

            <Component className='d-justify-start'>
            <ClientMessage><Text size={.8}>Alright, don't forget to stay in-touch</Text></ClientMessage>
            </Component>

            <Component className='d-justify-end'>
            <UserMessage><Text size={.8}>Yea i will, be.. i want to ask smtgn</Text></UserMessage>
            </Component>

            <Component className='d-justify-start'>
            <ClientMessage><Text size={.8}>Carry on my brother</Text></ClientMessage>
            </Component>

            </Component>
            </Component>
            <Component style={{height:'9%'}} px={1} className='bg-white d-align shadow-primary card-message-container'>
            <svg width={19} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#627184" stroke-width="0.45600000000000007"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.617 14.496a1 1 0 0 1 1.414 1.414l-3.182 3.182a7 7 0 1 1-9.9-9.9l5.658-5.656a5 5 0 1 1 7.07 7.07l-5.656 5.658a3 3 0 0 1-4.243-4.243l4.596-4.596a1 1 0 1 1 1.415 1.414l-4.597 4.596a1 1 0 1 0 1.415 1.414l5.656-5.657a3 3 0 1 0-4.242-4.242l-5.657 5.657a5 5 0 1 0 7.071 7.07l3.182-3.181z" fill="#627184"></path></g></svg>
            <InputText placeholder='Type a message..' ml={.5} mt={-.12} opacity={.7} size={80}/>
            <Component size={20} className='d-justify-end'>
            <div className="send-btn d-center pointer">
            <svg width={15} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="send" class="icon glyph" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.66,12a2,2,0,0,1-1.14,1.81L5.87,20.75A2.08,2.08,0,0,1,5,21a2,2,0,0,1-1.82-2.82L5.46,13H11a1,1,0,0,0,0-2H5.46L3.18,5.87A2,2,0,0,1,5.86,3.25h0l14.65,6.94A2,2,0,0,1,21.66,12Z" style={{fill:'#ffffff'}}></path></g></svg>
            </div>
            </Component>
            </Component>
            </Component>
        </Component>
        </Component>
        </Component>
    </Component>
    </Component>
  )
}

export default Monica