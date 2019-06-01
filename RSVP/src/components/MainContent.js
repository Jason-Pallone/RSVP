import React from 'react'
import Header from './Header'
import AddGuest from './AddGuest';
import GuestList from './GuestList';
import PendingGuestLi from './PendingGuestLi';

const MainContent=(props)=>{
    {/* 
    checks to see if the first li has been created, if not created shows the intro message and doesn't 
    dispaly the filter checkbox, else if first li is created, hides intro message and shows filter checkbox
     */}

     const guests = props.guest

     if (guests.length < 1) {

        return( 

          <div className="App">
  
              <Header />
              <AddGuest
              guest={props.guest}
              addGuest={props.addGuest}
              updatePendingGuestValue={props.updatePendingGuestValue}
              pendingGuest={props.pendingGuest}
              />

              <p className='intro-message'>
              Invite some friends and family! Confirm your guests,
              change their names if needed, remove the guest or filter through your guest who
              have/have not confirmed. Get started above!
              </p>

              <PendingGuestLi
                pendingGuest={props.pendingGuest}
              />
          </div>
            )
   } else {

      return(

    <div className="App">
    
        <Header />
        <AddGuest
        guest={props.guest}
        addGuest={props.addGuest}
        updatePendingGuestValue={props.updatePendingGuestValue}
        pendingGuest={props.pendingGuest}
        />

        <div className='filter-checkbox-container'>
          <label className='filter-guests-label'>
              Hide all unconfirmed guest
            <input type='checkbox' className='filter-guests-checkbox'
            value={props.filterUnconfirmedGuest} onChange={props.toggleFilterUnconfirmedGuest} />
          </label>
        </div>
    
        <GuestList
          guest={props.guest}
          toggleGuestConfirmed={props.toggleGuestConfirmed}
          toggleEditGuest={props.toggleEditGuest}
          editGuest={props.editGuest}
          removeGuest={props.removeGuest}
          filterUnconfirmedGuest={props.filterUnconfirmedGuest}
            />

        <PendingGuestLi
          pendingGuest={props.pendingGuest} 
        />
    </div>
      )
    }
}

export default MainContent