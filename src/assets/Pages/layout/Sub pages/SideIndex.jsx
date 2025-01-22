import React from 'react'
import { Component, Text, Label } from '../../../style'

export const SideIndex = () => {
  return (
    <>
    <Component className='d-flex pointer pager-span' radius={.5}>
    <Component className="d-center" py={.4} px={.4}>
    <svg width={17} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6c7885" stroke-width="2.016" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </Component>
    <Component className="d-align" size={100}>
    <Text size={.87}>Recent</Text>
    </Component>
    <Component className="d-center" px={.4}>
        <Component className='d-align' radius={.4} py={.05} px={.1}>
        <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#6c7885" stroke-width="2.112" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </Component>
    </Component>
    </Component>
    
    <Component className='d-flex pointer pager-san pager-sub-span' radius={.5}>
    <Component className='pager-sub-list-container cursor-none' size={100}>
    <Component className='sub-list'>
        <div className="hr-list d-align">
            <div className="list"></div>
        </div>
    <input type="radio" id="first-list" name="pager-list-radio"  className='checked'/>
    <Label className='pager-sub-list d-flex link' for={'first-list'} aria-label='/monica'>
    <Component className='pager-span-title d-align'>
        <Text size={.78}># Monicca - Landing</Text>
    </Component>
    <Component size={20} className='d-justify-end d-align'>
        <Component scale={.9} radius={2} px={.4} py={.1} className='d-center bg-yellow-light yellow-outline-light'>
            <Text size={.8} className='bold'>9</Text>
        </Component>
    </Component>
    </Label>
    </Component>
    
    <Component className='sub-list'>
    <div className="hr-list d-align">
        <div className="list"></div>
    </div>
    <input type="radio" id="second-list" name="pager-list-radio"/>
    <Label className='pager-sub-list d-flex' for={'second-list'}>
    <Component className='pager-span-title d-align'>
        <Text size={.78}># BCA - CRM App</Text>
    </Component>
    <Component size={40} className='d-justify-end d-align'>
        <Component scale={.9} radius={2} px={.4} py={.07} className='d-center bg-red-light red-outline-light'>
            <Text size={.8} className='bold'>11</Text>
        </Component>
    </Component>
    </Label>
    </Component>
    
    <Component className='sub-list'>
    <div className="hr-list d-align">
        <div className="list"></div>
    </div>
    <input type="radio" id="third-list" name="pager-list-radio"/>
    <Label className='pager-sub-list d-flex' for={'third-list'}>
    <Component className='pager-span-title d-align'>
        <Text size={.78}># Bandai - Disks</Text>
    </Component>
    <Component className='d-justify-end d-align'>
        <Component scale={.9} radius={2} px={.4} py={.6} className='d-center'/>
    </Component>
    </Label>
    </Component>
    
    <Component className='sub-list'>
    <div className="hr-list d-align">
        <div className="list"></div>
    </div>
    <input type="radio" id="fourth-list" name="pager-list-radio"/>
    <Label className='pager-sub-list d-flex' for={'fourth-list'}>
    <Component className='pager-span-title d-align'>
        <Text size={.78}># Amera - X Clone</Text>
    </Component>
    <Component className='d-justify-end d-align'>
        <Component scale={.9} radius={2} px={.4} py={.07} className='d-center bg-purple-light purple-outline-light'>
            <Text size={.8} className='bold'>5</Text>
        </Component>
    </Component>
    </Label>
    </Component>
    
    </Component>
    </Component>
    
    <Component mt={1.5} className='d-flex pointer pager-span' radius={.5}>
    <Component className="d-center" py={.4} px={.4}>
    <svg width={17} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.5 3H11.5118C12.2455 3 12.6124 3 12.9577 3.08289C13.2638 3.15638 13.5564 3.27759 13.8249 3.44208C14.1276 3.6276 14.387 3.88703 14.9059 4.40589L20.5 10M7.5498 10.0498H7.5598M9.51178 6H8.3C6.61984 6 5.77976 6 5.13803 6.32698C4.57354 6.6146 4.1146 7.07354 3.82698 7.63803C3.5 8.27976 3.5 9.11984 3.5 10.8V12.0118C3.5 12.7455 3.5 13.1124 3.58289 13.4577C3.65638 13.7638 3.77759 14.0564 3.94208 14.3249C4.1276 14.6276 4.38703 14.887 4.90589 15.4059L8.10589 18.6059C9.29394 19.7939 9.88796 20.388 10.5729 20.6105C11.1755 20.8063 11.8245 20.8063 12.4271 20.6105C13.112 20.388 13.7061 19.7939 14.8941 18.6059L16.1059 17.3941C17.2939 16.2061 17.888 15.612 18.1105 14.9271C18.3063 14.3245 18.3063 13.6755 18.1105 13.0729C17.888 12.388 17.2939 11.7939 16.1059 10.6059L12.9059 7.40589C12.387 6.88703 12.1276 6.6276 11.8249 6.44208C11.5564 6.27759 11.2638 6.15638 10.9577 6.08289C10.6124 6 10.2455 6 9.51178 6ZM8.0498 10.0498C8.0498 10.3259 7.82595 10.5498 7.5498 10.5498C7.27366 10.5498 7.0498 10.3259 7.0498 10.0498C7.0498 9.77366 7.27366 9.5498 7.5498 9.5498C7.82595 9.5498 8.0498 9.77366 8.0498 10.0498Z" stroke="#6c7885" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </Component>
    <Component className="d-align" size={100}>
    <Text size={.87}>All Projects</Text>
    </Component>
    </Component>
    
    <Component mt={.5} className='d-flex pointer pager-span' radius={.5}>
    <Component className="d-center" py={.4} px={.4}>
    <svg width={17} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 13.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#6c7885" stroke-width="2.016" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </Component>
    <Component className="d-align" size={100}>
    <Text size={.87}>Categories</Text>
    </Component>
    <Component className="d-center" px={.4}>
        <Component className='d-align' radius={.4} py={.05} px={.1}>
        <svg width={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(90)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 7L10 12L15 17" stroke="#6c7885" stroke-width="2.112" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </Component>
    </Component>
    </Component>
    
    <Component className='d-flex pointer pager-san pager-sub-span' radius={.5}>
    <Component className='pager-sub-list-container cursor-none' size={100}>
    <Component className='sub-list'>
        <div className="hr-list d-align">
            <div className="list"></div>
        </div>
    <input type="radio" id="fifth-list" name="pager-list-radio"/>
    <Label className='pager-sub-list d-flex' for={'fifth-list'}>
    <Component className='pager-span-title d-align'>
        <Text size={.78}># Dashboard UI</Text>
    </Component>
    <Component size={20} className='d-justify-end d-align'>
        <Component scale={.9} radius={2} px={.4} py={.1} className='d-center bg-green-light green-outline-light'>
            <Text size={.8} className='bold'>9</Text>
        </Component>
    </Component>
    </Label>
    </Component>
    
    <Component className='sub-list'>
    <div className="hr-list d-align">
        <div className="list"></div>
    </div>
    <input type="radio" id="sixth-list" name="pager-list-radio"/>
    <Label className='pager-sub-list d-flex' for={'sixth-list'}>
    <Component className='pager-span-title d-align'>
        <Text size={.78}># eCommerce UI</Text>
    </Component>
    <Component size={40} className='d-justify-end d-align'>
        <Component scale={.9} radius={2} px={.4} py={.07} className='d-center bg-red-light red-outline-light'>
            <Text size={.8} className='bold'>11</Text>
        </Component>
    </Component>
    </Label>
    </Component>
    
    <Component className='sub-list'>
    <div className="hr-list d-align">
        <div className="list"></div>
    </div>
    <input type="radio" id="seventh-list" name="pager-list-radio"/>
    <Label className='pager-sub-list d-flex' for={'seventh-list'}>
    <Component className='pager-span-title d-align'>
        <Text size={.78}># Bandai - Disks</Text>
    </Component>
    <Component className='d-justify-end d-align'>
        <Component scale={.9} radius={2} px={.4} py={.6} className='d-center'/>
    </Component>
    </Label>
    </Component>
    
    <Component className='sub-list'>
    <div className="hr-list d-align">
        <div className="list"></div>
    </div>
    <input type="radio" id="eightiest-list" name="pager-list-radio"/>
    <Label className='pager-sub-list d-flex' for={'eightiest-list'}>
    <Component className='pager-span-title d-align'>
        <Text size={.78}># UI Components</Text>
    </Component>
    <Component className='d-justify-end d-align'>
        <Component scale={.9} radius={2} px={.4} py={.07} className='d-center bg-purple-light purple-outline-light'>
            <Text size={.8} className='bold'>5</Text>
        </Component>
    </Component>
    </Label>
    </Component>
    
    </Component>
    </Component>
    
    </>
  )
}

export default SideIndex