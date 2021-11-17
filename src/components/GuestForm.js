import React, { useState, useEffect } from "react";
import * as yup from 'yup';




const yupForm = yup.object().shape({
    items: yup.string(),
    rsvp: yup.boolean(),
})

const defaultVal = {
    items: "",
    yes: false,
    no: false,
   
}

function GuestForm(props) {
    const { submit } = props;
    const [isValid, setIsValid] = useState(true);

    const [form, setForm] = useState(defaultVal);

    const [errorState, setError] = useState({
        items: "",
        rsvp: "",
        
    })

    useEffect(() => {
        yupForm.isValid(form)
            .then(valid => {
                setIsValid()
            });
    }, [form]);


    const validate = (e) => {
        yup.reach(yupForm, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setError({
                    ...errorState,
                    [e.target.name]: ""
                })

            })
            .catch(error => {
                console.log(error.errors)
                setError({
                    ...errorState,
                    [e.target.name]: error.errors[0]
                })
            })
    };

    const inputChange = e => {
        validate(e)

        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setForm({ ...form, [e.target.name]: value });
    };
    const formSubmit=()=>{
        return null;
    }
    const onSubmit = evt=>{
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <h1>Welcome Guest</h1>

            <form onSubmit={formSubmit} id="guest-form">
                <label htmlFor="rsvp">Will you be joining us?</label><br />
                    <input
                        id="rsvp"
                        type="radio"
                        onChange={inputChange}
                        name="rsvp"
                        value="yes"
                        checked={form.true}
                    />yes
                    <input
                        id="rsvp"
                        type="radio"
                        onChange={inputChange}
                        name="rsvp"
                        value="no"
                        checked={form.false}
                    />no<br />
                    <label htmlFor="item-dropdown">What are you bringing? </label>
                    <br /><select 
                    id="item-dropdown" 
                    name="items" 
                    value={form.items} 
                    onChange={inputChange}>
                        <option value="Turkey">Turkey</option>
                        <option value="Ham">Ham</option>
                        <option value="Potatoes">Potatoes</option>
                    </select><br />
                <button onClick={onSubmit}>submit</button>
            </form>
        </div>
    );
}


export default GuestForm;
