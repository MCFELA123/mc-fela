import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Index from './assets/Pages/layout/Index'
import mcfela from './assets/img/mcfela.png'
import mcfela_default from './assets/icons/favico/favicon.png'
import user_profile from './assets/img/profile/prompt.webp'
import SideContent from './assets/Pages/layout/SideContent'
import Settings from './assets/Pages/Settings/Settings.jsx'
import Home from './assets/Pages/layout/Home/Home.jsx'
import { TopBar, View, Main, Mid, Right, Component, Left, PageIndicator, WindowStateControl, SpaceBetween, Icon, Indicator, Inder, Text, Button, Hr_Y, UserProfile, Toggle, Toggler, Hr_X, SideControl, Blocker } from './assets/style.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SideAction from './assets/Pages/layout/SideAction.jsx'
import Test from './Test.jsx'
import Monica from './assets/Pages/Product/Monica.jsx'
import Login from './assets/Pages/Login.jsx'

function App() {

  return (
    <Router>
      <View size={100}>
      <View size={100} zIndex={-1} className='index d-flex'>
      <Component style={{width:'4em'}} className='bg-dark side-media'>
      <SideControl zIndex={1} className='side-control d-justify'>
      <SideAction/>
      </SideControl>
      </Component>
      <Component size={20} className='card-index sub-control'>
        <SideContent/>
      </Component>
      <Component size={80} className='card-index main-layout'>
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
          <Link to={'/login'}>
                <Button className='btn-primary' radius={.6}>
                <Text>Get started</Text>
            </Button>
          </Link>
        </Component>
    </Component>
    </TopBar>
    </div>
    <Blocker index={1} className={'block-full'}/>
    <Component className='page-child'>
    <Switch>
        <Route path={'/login'}><Login/></Route>
        <Route path={'/home'}><Home/></Route>
        <Route path={'/Settings'}><Settings/></Route>
        <Route path={'/monica'}><Monica/></Route>
      <Route path={'/mc-fela'}><Monica/></Route>
        </Switch>
    </Component>
      </Component>
      </View>
    </View>
    </Router>
  )
}

export default App
