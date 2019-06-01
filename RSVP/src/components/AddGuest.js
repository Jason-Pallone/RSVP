import React from 'react';


const InviteGuest =(props)=>{
    return(
        <div className='add-guest-container'>
            <form onSubmit={props.addGuest}>
                <input type='text' className='invite-guest-input' placeholder='Invite someone!'
                value={props.pendingGuest} onChange={props.updatePendingGuestValue}
                />
                <button className='add-guest-button' type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default InviteGuest

