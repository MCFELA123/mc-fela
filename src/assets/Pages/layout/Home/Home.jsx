import React from 'react'
import { Component, Icon, Inder, Indicator, PageIndicator, SpaceBetween, Text, WindowStateControl } from '../../../style'
import mcfela_icon from '../../../icons/favico/favicon.png'

export const Home = () => {
  return (
    <div className='router d-center'>
    <Component className='home-index' size={95}>
    <PageIndicator className='page-indicator d-align'>
            {/* window state control */}
        <WindowStateControl>
        <Component className='d-align state-control'>
            <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#6c7885" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </Component>
        <Component className='d-align state-control' opacity={.5}>
            <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#6c7885" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
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
        <Component ml={.5}><Text size={.9}>Dashboard</Text></Component>
        </Indicator>

        <SpaceBetween>/</SpaceBetween>
        </PageIndicator>
        <br /><br /><br />
        <Text size={4}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis minima facere! Ad quaerat perspiciatis consequuntur voluptates nulla expedita nisi harum distinctio sed est, error eum reprehenderit excepturi. Laudantium, maxime.</Text>
        {/* <Component size={100} className='bg-dark'>d</Component> */}
    </Component>
    </div>
  )
}

export default Home