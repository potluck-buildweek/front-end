//here will go the needful for an organizer form!

//exporta me to App;; this component will mount on 'private' organizer route.
//set 'organizer' into state? and if userType===organizer mount THIS component; else mount GUEST component is the idea...

//DATA / 'IMPORT' SECTION

import React, {useState} from 'react';

const userType = {
    //assumingw e will do user type validation thru this with a key of 'type' and vals of 'guest' or 'organizer'
    organizer: 1,
    guest: 0 //NOT ints-- these are boolean values that represent our user type.
}

//needful:: add datetime, requested items, guestlist, invite users (email? field that will do() sending an invite out)

const dateTime={ //form
    date: '',
    time: ''
}

const items={ //form
    requested: []
}

//reminder to add functionality that will check if an item has already been requested!

const guestlist={ //'guestlist' will be a list grepped from inviteData below;; this will be the guests who have rspv'd (needful validity from rsvp() function)
    guests: []
}

const inviteData = { //called so to differentiate between this data and the function handling inviting()
    invited: []
}

//LOGIC aka 'FUNCTION' SECTIONR

const OrganizerForm = (props)=>{
//set the user into state, first.

const [user,setUser] = useState(userType); //this may need to be changed to an array if my logic is not completely faulty...


    return(
        <div className='organizer-form'>

        </div>
    )
}

//RETURN OR 'RENDER' SECTIONR
export default OrganizerForm;