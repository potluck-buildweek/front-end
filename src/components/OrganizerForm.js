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
    invitedEmail: '',
    invitedName: '',
    invitedMessage: '' 
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

const [formValues, setFormValues] = useState(eventForm)

const [invite, setInvite] = useState(inviteData);

  const submit=()=>{
    //wip
    console.log('hiiiiii')
  }

//datetime, guestlist, itemslist can all use same functionality as they are just plain text inputs.

//LOGIC sectionr

    const onChange=(event)=>{
        
        //do the filling of form!

        let value = event.target.value;
        setFormValues({ ...formValues, [event.target.name]:value})
    }
        const onChange2=(event)=>{
        
        //do the filling of form!

        let value = event.target.value;
        setInvite({ ...invite, [event.target.name]:value})
    }

    const submitEvent=(event)=>{
        event.preventDefault();
        //do submission of form, returning a record of the thing itself
        submit();
    }
        const submitInvite=(event)=>{
        event.preventDefault();
        //do submission of form, returning a record of the thing itself
        submit();
    }

    //RETURN AKA 'RENDER' SECTIONR
    return(
        <div className='organizer-form'>
            {/*NEEDFUL: date/time text input X, items X, guestlist X, 'invite' form*/}
            <form className='datetime-guestlist' onSubmit={submitEvent}>
            <label>Date
                <input 
                type='date'
                name='date'
                value={formValues.date}
                onChange={onChange}
                />
            </label>

            <label>Time
                <input 
                type='time'
                name='time'
                value={formValues.time}
                onChange={onChange}
                />
            </label>

            <label>Items
                <textarea 
                type='text'
                name='items'
                value={formValues.items}
                onChange={onChange}
                />
            </label>

            <label>Guest List
                <textarea 
                type='text'
                name='guests'
                value={formValues.guests}
                onChange={onChange}
                />
            </label>
            <button> submit </button>
        </form>
        <form className='invited-data' onSubmit={submitInvite}>
            <label>Email
                <input 
                type='email'
                name='email'
                value={invite.invitedEmail}
                onChange={onChange2}
                />
            </label>

            <label>Name
                <input 
                type='text'
                name='name'
                value={invite.invitedName}
                onChange={onChange2}
                />
            </label>

            <label>Enter a MESSAGE!
                <input 
                type='text'
                name='message'
                value={invite.invitedMessage}
                onChange={onChange2}
                />
            </label>
        <button> submit </button>
        </form>

        </div>
    )
}

//RETURN OR 'RENDER' SECTIONR
export default OrganizerForm;