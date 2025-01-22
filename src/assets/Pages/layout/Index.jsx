import React from 'react'
import { TopBar, View, Main, Mid, Right, Component, Left, PageIndicator, WindowStateControl, SpaceBetween, Icon, Indicator, Inder, Text, Button, Hr_Y, UserProfile, Toggle, Toggler } from '../../style'
import user_profile from '../../img/profile/prompt.webp'
import mcfela from '../../img/mcfela.png'

export const Index = () => {
  return (
    <View className='main-content'>
    <div className="top-nav d-center">
    <TopBar size={90} radius={1} className='top-bar d-align'>
    <Component className='d-align'>
        <div className="mcfela d-center">
            <Icon src={mcfela} scale={.9} size={1.5} />
        </div>
        <Component ml={1} className='link d-align'>
            <Component className='d-align'>
                <Text size={.93} className='text-primary'>Explore</Text>
            </Component>
            <Component className='d-align' ml={.2}>
            <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, -1, 0, 2)rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#383f48" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </Component>
        </Component>
        <Component ml={1} className='link d-align' opacity={.5}>
            <Component className='d-align'>
                <Text size={.93} className='text-primary'>Projects</Text>
            </Component>
        </Component>
        <Component ml={1} className='link d-align' opacity={.5}>
            <Component className='d-align'>
                <Text size={.93} className='text-primary'>Community</Text>
            </Component>
        </Component>
    </Component>
    <Component size={100} className='d-flex'>
        <Component size={100} className='d-justify-end d-align'>
        <Component className='d-align' mr={1.5}>
            <div className="notify"></div>
        <svg width={25} opacity={.5} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.35179 20.2418C9.19288 21.311 10.5142 22 12 22C13.4858 22 14.8071 21.311 15.6482 20.2418C13.2264 20.57 10.7736 20.57 8.35179 20.2418Z" fill="#6c7885"></path> <path d="M18.7491 9V9.7041C18.7491 10.5491 18.9903 11.3752 19.4422 12.0782L20.5496 13.8012C21.5612 15.3749 20.789 17.5139 19.0296 18.0116C14.4273 19.3134 9.57274 19.3134 4.97036 18.0116C3.21105 17.5139 2.43882 15.3749 3.45036 13.8012L4.5578 12.0782C5.00972 11.3752 5.25087 10.5491 5.25087 9.7041V9C5.25087 5.13401 8.27256 2 12 2C15.7274 2 18.7491 5.13401 18.7491 9Z" fill="#6c7885"></path> </g></svg>
        </Component>
        <UserProfile>
            <Icon src={user_profile}/>
        </UserProfile>
        <SpaceBetween><Hr_Y/></SpaceBetween>
            <Button className='btn-primary' radius={.6}>
                <Text>Get started</Text>
            </Button>
        </Component>
    </Component>
    </TopBar>
    </div>
    <br /><br /><br />

{/* 
        <Component className='d-flex frame-component' size={100}>
        <Component size={100} className='d-flex'>
        <iframe src='/Home'/>
        </Component>
        </Component> */}
    </View>
  )
}

export default Index