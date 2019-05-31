import React from 'react';

const GuestName =(props)=>{
    if(props.isEditing){
        return(
        <input type='text' value={props.guestName} onChange={e => props.editGuest(e.target.value)}/>
        )
    }

    return (
    <span>{props.guestName}</span>
    )
}



export default GuestName