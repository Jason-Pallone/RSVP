import React, {Component} from 'react';
import '../App.css'
import Header from './Header'
import AddGuest from './AddGuest';
import GuestList from './GuestList';
import PendingGuestLi from './PendingGuestLi';

class App extends Component {
  state={
    pendingGuest: '',
    filterUnconfirmedGuest: false,
    guest: []
  }

  guestId = 0

  newGuestId=()=>{
    const id = this.guestId
    this.guestId += 1
    return id
  }

  updatePendingGuestValue=(e)=>{
    this.setState({
      pendingGuest: e.target.value
    })
  }

  addGuest=(e)=>{
    e.preventDefault()
    const id = this.newGuestId()
    this.setState({
      guest: [{
        name: this.state.pendingGuest,
        isConfirmed: false,
        isEditing: false,
        id
      },
      ...this.state.guest
    ],
      pendingGuest: ''
    })
  }


  removeGuest=(id)=>{
    this.setState({
      guest: this.state.guest.filter(guest => id !== guest.id)
    })
  }

  editGuest=(name, id)=>{
    this.setState({
      guest: this.state.guest.map((guest) =>{
        if(id===guest.id){
          return{
            ...guest,
           name
          }}
          return guest
      })
    })
  }



toggleGuestProperty=(property, id)=>
  this.setState({
    guest: this.state.guest.map((guest)=>{
      if(id===guest.id){
        return {
          ...guest,
          [property]: !guest[property]
        }
      }
      return guest
    })
  })


toggleEditGuest=(id)=>{
  this.toggleGuestProperty('isEditing', id)
}


toggleGuestConfirmed=(id)=>{
  this.toggleGuestProperty('isConfirmed', id)
}


showInviteFriendsMessage=()=>{
  
}

  render(){

    {/* checks to see if the first li has been created, if not created shows the intro message and doesn't 
    dispaly the filter checkbox, else if first li is created, hides intro message and shows filter checkbox
     */}
    const guests = this.state.guest

    if(guests.length < 1){
      return(

    <div className="App">
      <Header />
      <AddGuest
      guest={this.state.guest}
      addGuest={this.addGuest}
      updatePendingGuestValue={this.updatePendingGuestValue}
      pendingGuest={this.state.pendingGuest}
      />

    <p className='intro-message'>Invite some friends and family! Confirm your guests,
     change their names if needed, remove the guest or filter through your guest who
     have/have not confirmed. Get started above!</p>

      <PendingGuestLi
        pendingGuest={this.state.pendingGuest} />
    </div>

  )}else{
    return(    <div className="App">
    <Header />
    <AddGuest
    guest={this.state.guest}
    addGuest={this.addGuest}
    updatePendingGuestValue={this.updatePendingGuestValue}
    pendingGuest={this.state.pendingGuest}
    />

    <div className='filter-checkbox-container'>
      <label className='filter-guests-label'>Hide all unconfirmed guest
        <input type='checkbox' className='filter-guests-checkbox'
        value={this.state.filterUnconfirmedGuest} onChange={this.toggleFilterUnconfirmedGuest} />
      </label>
    </div>

    <GuestList
      guest={this.state.guest}
      toggleGuestConfirmed={this.toggleGuestConfirmed}
      toggleEditGuest={this.toggleEditGuest}
      editGuest={this.editGuest}
      removeGuest={this.removeGuest}
      filterUnconfirmedGuest={this.state.filterUnconfirmedGuest}
       />
    <PendingGuestLi
      pendingGuest={this.state.pendingGuest} />
  </div>
    )
  }
  }
}

export default App;
