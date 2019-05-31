import React from 'react'
import Guest from './Guest'

const GuestList =(props)=>

    <div>
    {/* checks to see if filterConfrimedGuest checkbox is checked or not, then runs the filter
     based on checkbox value of true or false, if checked, will return array of only confirmed guest,
      hiding all non confirmed guest */}
        <ul>
            {props.guest.filter( guest => !props.filterUnconfirmedGuest || guest.isConfirmed)
            .map((guest, index) =>   <Guest 
                            key={index}
                            guestName={guest.guestName}
                            toggleGuestConfirmed={props.toggleGuestConfirmed}
                            isConfirmed={guest.isConfirmed}
                            toggleEditGuest={()=> props.toggleEditGuest(guest.id)}
                            isEditing={guest.isEditing}
                            editGuest={(editedName)=>props.editGuest(editedName, guest.id)}
                            removeGuest={()=> props.removeGuest(guest.id)}
                                />)}
       </ul>
    </div>



export default GuestList