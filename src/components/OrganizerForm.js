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

const eventForm={ //form
    date: '',
    time: '',
    requestedItems: [],
    guests: [], //guests comes from confirmed folks
}

//reminder to add functionality that will check if an item has already been requested!

const inviteData = { //called so to differentiate between this data and the function handling inviting(). THIS is the data that our form will be initialized with! what else to do..
    invitedEmail: '',
    invitedName: '',
    invitedMessage: '' 
}

//LOGIC aka 'FUNCTION' SECTIONR

const OrganizerForm = (props)=>{
//as always, DATA SECTIONR

const [formVals,setFormVals] = useState(eventForm)

const [invite,setInvite] = useState(inviteData);

const {formValues,inviteValues,update,submit} = props;

//datetime, guestlist, itemslist can all use same functionality as they are just plain text inputs.

//LOGIC sectionr

    const update=(event)=>{
        
        //do the filling of form!

        let value = event.target.value;
        setFormVals({...formVals,[event.target.name]:value})
    }

    const submit=(event)=>{
        event.preventDefault();
        //do submission of form, returning a record of the thing itself
       submit();
    }

    //RETURN AKA 'RENDER' SECTIONR
    return(
        <form className='organizer-form' onSubmit={submit}>
            {/*NEEDFUL: date/time text input X, items X, guestlist X, 'invite' form*/}
            <span className='datetime-guestlist'>
            <lable>Date
                <input 
                type='text'
                name='date'
                value={formValues.date}
                onChange={update}
                />
            </lable>

            <lable>Time
                <input 
                type='text'
                name='time'
                value={formValues.time}
                onChange={update}
                />
            </lable>

            <lable>Items
                <input 
                type='text'
                name='items'
                value={formValues.requestedItems}
                onChange={update}
                />
            </lable>

            <lable>Guest List
                <input 
                type='text'
                name='guests'
                value={formValues.guests}
                onChange={update}
                />
            </lable>

            </span>

        <span className='invited-data'>
            <lable>Email
                <input 
                type='email'
                name='email'
                value={inviteValues.invitedEmail}
                onChange={update}
                />
            </lable>

            <lable>Name
                <input 
                type='text'
                name='name'
                value={inviteValues.invitedName}
                onChange={update}
                />
            </lable>

            <lable>Enter a MESSAGE!
                <input 
                type='text'
                name='message'
                value={inviteValues.invitedMessage}
                onChange={update}
                />
            </lable>

        </span>

        </form>
    )
}

//RETURN OR 'RENDER' SECTIONR
export default OrganizerForm;