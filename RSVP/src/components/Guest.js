import React from 'react'
import GuestName from './GuestName'

const Guest = (props)=>
    <li key={props.key}>
        <GuestName
            isEditing={props.isEditing} 
            editGuest={props.editGuest}
            name={props.name}
        />
        <div >
            <label className='guestCheckboxLabel'> Confirmed
                <input className='guestCheckbox' type='checkbox' 
                value={props.isConfirmed} onChange={props.toggleGuestConfirmed}
                />
            </label>
        </div>  
        <button className='edit-button' onClick={props.toggleEditGuest}>{props.isEditing ? 'Save':'Edit'}</button>
        <button className='remove-button' onClick={props.removeGuest}>Remove</button>
    </li>


export default Guest