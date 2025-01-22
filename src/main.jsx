import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import './assets/Query/media.query.min.css'
import './assets/layout/styles/colors/colors.css'
import App from './App.jsx'
import './assets/modules/function/Module.js'
import Settings from './assets/Pages/Settings/Settings.jsx'
import './App.css'
import { TopBar, View, Main, Mid, Right, Component, Left, PageIndicator, WindowStateControl, SpaceBetween, Icon, Indicator, Inder, Text, Button, Hr_Y, UserProfile, Toggle, Toggler, Hr_X, SideControl } from './assets/style.js'
// import { Link } from 'react-router-dom'
import Test from './Test.jsx'
import SideAction from './assets/Pages/layout/SideAction.jsx'
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='/home' element={<Test />} />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <App/>
)
