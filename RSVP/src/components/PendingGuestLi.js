import React from 'react'

const PendingGuestLi =(props)=>{
    if(props.pendingGuest){
        return(
            <li className='pending-guest-li'>{props.pendingGuest}</li>
        )} 
    return null
}

export default PendingGuestLi