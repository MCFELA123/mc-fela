import React from 'react'
import { Component, Hr_Xopt, InputText, Label, Text } from '../../style'
import SideIndex from './Sub pages/SideIndex'

export const SideContent = () => {
  return (
    <>
    <br />
    <Component className='d-justify' size={100}>
        <Component size={85}>
            <Component size={100} className='d-flex'>
                <Component size={50} className="d-align">
                <Text size={1.2} className={'text-primary bold'}>Projects</Text>
                </Component>
                <Component size={50} className="d-align d-justify-end">
                    <Component className='d-align pointer item-span' px={.25} py={.2} radius={.35}>
                    <svg width={18} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 2.75V2.75C4.85218 2.75 4.15326 2.75 3.60195 2.97836C2.86687 3.28284 2.28284 3.86687 1.97836 4.60195C1.75 5.15326 1.75 5.85218 1.75 7.25V8.75C1.75 10.1478 1.75 10.8467 1.97836 11.3981C2.28284 12.1331 2.86687 12.7172 3.60195 13.0216C4.15326 13.25 4.85218 13.25 6.25 13.25V13.25M6.25 2.75H9.45C11.1302 2.75 11.9702 2.75 12.612 3.07698C13.1765 3.3646 13.6354 3.82354 13.923 4.38803C14.25 5.02976 14.25 5.86984 14.25 7.55V8.45C14.25 10.1302 14.25 10.9702 13.923 11.612C13.6354 12.1765 13.1765 12.6354 12.612 12.923C11.9702 13.25 11.1302 13.25 9.45 13.25H6.25M6.25 2.75V13.25" stroke="currentColor" stroke-width="1.5"></path><path d="M10.75 9.5L9.25 8L10.75 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </Component>
                </Component>
            </Component>
            <br />
            <Component px={.25} py={.25} radius={.6} className='pager-control d-flex'>
            <Component size={50} className='d-align'>
            <input type="radio" id="team" name="pager-radio" className='checked'/>
            <Label size={100} py={.2} radius={.45} for={'team'} className='card-pager d-center'>
                <Text size={.85}>Team</Text>
            </Label>
            </Component>
            <Component size={50} className='d-align'>
            <input type="radio" id="community" name="pager-radio"/>
            <Label size={100} py={.2} radius={.45} for={'community'} className='card-pager d-center'>
                <Text size={.85}>Devs</Text>
            </Label>
            </Component>
            </Component>

            <Component mt={1} className='bg-dark d-flex' radius={.5}>
            <Component className="d-center" py={.4} px={.4}>
            <svg width={15} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#505964" stroke-width="2.352" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </Component>
            <Component className="d-center">
            <InputText py={.5} placeholder='Search' size={100} />
            </Component>
            <Component className="d-center" px={.4}>
                <Component className='cmd-search d-align' radius={.4} py={.01} px={.4}>
                <Component scale={.9} className='d-flex'>
                <svg width={15} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M1 4C1 2.34315 2.34315 1 4 1C5.65685 1 7 2.34315 7 4V5H9V4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4C15 5.65685 13.6569 7 12 7H11V9H12C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V11H7V12C7 13.6569 5.65685 15 4 15C2.34315 15 1 13.6569 1 12C1 10.3431 2.34315 9 4 9H5V7H4C2.34315 7 1 5.65685 1 4ZM5 5V4C5 3.44772 4.55228 3 4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5H5ZM7 7V9H9V7H7ZM5 11H4C3.44772 11 3 11.4477 3 12C3 12.5523 3.44772 13 4 13C4.55228 13 5 12.5523 5 12V11ZM11 11V12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11H11ZM11 5H12C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4V5Z" fill="#6c7885"></path> </g></svg>
                <Component className='bold pointer d-align' ml={.3}>
                    <Text size={.9} className='bold'>S</Text>
                </Component>
                </Component>
                </Component>
            </Component>
            </Component>
            <Component className='side-content'>
            <SideIndex/>
            </Component>
            </Component>
    </Component>
    </>
  )
}

export default SideContent