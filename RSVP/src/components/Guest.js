import React from 'react'
import GuestName from './GuestName'

const Guest = (props)=>
    <li>
        <GuestName 
            guestName={props.guestName}
            isEditing={props.isEditing} 
            editGuest={props.editGuest}
            />
        <label className='guestCheckboxLabel'> Confirmed
        <input className='guestCheckbox' type='checkbox' value={props.isConfirmed}/>
        </label>
    
        <button className='edit-button' onClick={props.toggleEditGuest}>{props.isEditing ? 'save':'edit'}</button>
        <button className='remove-button' onClick={props.removeGuest}>Remove</button>
    </li>


export default Guest