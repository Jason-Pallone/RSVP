import React from 'react';

const GuestName =(props)=>{
    
    if(props.isEditing){
        return(
        <input type='text' className='edit-guest-input'
         value={props.name} onChange={e => props.editGuest(e.target.value)}/>
        )
    }

    return (
    <span>{props.name}</span>
    )
}



export default GuestName