import React, { useState, useEffect } from "react";
import * as yup from 'yup';




const yupForm = yup.object().shape({
    items: yup.string(),
    yes: yup.boolean(),
    no: yup.boolean()
})

const defaultVal = {
    items: "",
    yes: false,
    no: false,
   
}

function guestForm() {
    const [isValid, setIsValid] = useState(true);

    const [form, setForm] = useState(defaultVal);

    const [errorState, setError] = useState({
        bringing: "",
        confirm: "",
        
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


    return (
        <div>
            <h1>Welcome Guest</h1>

            <form onSubmit={formSubmit} id="guest-form">
                <label htmlFor="rsvp">Will you be joining us?</label>
                <p>
                    <input
                        id="rsvp"
                        type="checkbox"
                        checked={form.yes}
                        onChange={inputChange}
                        name="yes"
                    />yes
                    <input
                        id="rsvp"
                        type="checkbox"
                        checked={form.no}
                        onChange={inputChange}
                        name="no"
                    />no
                

                </p>
                <p><label htmlFor="item-dropdown">What are you bringing? </label>
                    <select 
                    id="item-dropdown" 
                    name="items" 
                    value={form.items} 
                    onChange={inputChange}>
                        <option value="Turkey">Turkey</option>
                        <option value="Ham">Ham</option>
                        <option value="Potatoes">Potatoes</option>
                    </select>
                </p>

            </form>
        </div>
    );


}


export default guestForm;
