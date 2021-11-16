//here will go the needful for an organizer form!

//exporta me to App;; this component will mount on 'private' organizer route.
//set 'organizer' into state? and if userType===organizer mount THIS component; else mount GUEST component is the idea...

//DATA / 'IMPORT' SECTION

import React, {useState} from 'react';

const userType = {
    //assuming we will do user type validation thru this with a key of 'type' and vals of 'guest' or 'organizer'
    organizer: 1,
    guest: 0 //NOT ints-- these are boolean values that represent our user type.
}

//needful:: add datetime, requested items, guestlist, invite users (email? field that will do() sending an invite out)

const dateTime={ //form
    date: '',
    time: ''
}

const requestedItems={ //form
    requested: [] //array because it will be easier to do checking (below mention) with an array... maybe ;-)
}

//reminder to add functionality that will check if an item has already been requested!

const guestlist={ //'guestlist' will be a list grepped from inviteData below;; this will be the guests who have rspv'd (needful validity from rsvp() function) this will be the list of inviteData.email ? name : no invite for you
    guests: []
}

const inviteData = { //called so to differentiate between this data and the function handling inviting(). THIS is the data that our form will be initialized with! what else to do..
    invitedEmail: '',
    invitedName: '',
    invitedMessage: '' 
}

//LOGIC aka 'FUNCTION' SECTIONR

const OrganizerForm = (props)=>{
//as always, DATA SECTIONR

const [user,setUser] = useState(userType); //this may need to be changed to an array if my logic is not completely faulty...

const [dt,setDt] = useState(dateTime); //"dt" ie datetime

const [items,setItems] = useState(requestedItems);

const [guests,setGuests] = useState(guestlist);

const [invite,setInvite] = useState(inviteData);

const {formValues,update,submit} = props;

//datetime, guestlist, itemslist can all use same functionality as they are just plain text inputs.

//LOGIC sectionr

    const update=(event)=>{
        event.preventDefault();
        //do the filling of form!
    }

    const submit=(event)=>{
        //do submission of form, returning a record of the thing itself
    }

    //RETURN AKA 'RENDER' SECTIONR
    return(
        <div className='organizer-form'>
            {/*NEEDFUL: date/time text input, items, guestlist, 'invite' form*/}
        </div>
    )
}

//RETURN OR 'RENDER' SECTIONR
export default OrganizerForm;