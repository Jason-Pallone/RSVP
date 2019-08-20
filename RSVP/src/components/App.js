import React, {Component} from 'react';
import '../App.css'
import MainContent from './MainContent';

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

toggleFilterUnconfirmedGuest=()=>{
  this.setState({
    filterUnconfirmedGuest: !this.state.filterUnconfirmedGuest
  })
}

  render(){

    return(
      <div className='apps'>
      
    <MainContent 
      guest={this.state.guest}
      addGuest={this.addGuest}
      updatePendingGuestValue={this.updatePendingGuestValue}
      pendingGuest={this.state.pendingGuest}
      toggleGuestConfirmed={this.toggleGuestConfirmed}
      toggleEditGuest={this.toggleEditGuest}
      editGuest={this.editGuest}
      removeGuest={this.removeGuest}
      filterUnconfirmedGuest={this.state.filterUnconfirmedGuest}
      toggleFilterUnconfirmedGuest={this.toggleFilterUnconfirmedGuest}
    />
    </div>

    )
  }
}

export default App;
