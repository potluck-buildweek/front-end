import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = (props)=> {
    const {push} = useHistory();

    useEffect(()=> {
        const token = localStorage.getItem("token");

        axiosWithAuth()
            .post('/logout')
            .then(resp => {
                localStorage.removeItem('token');
                push('/login');
            });
    }, []);
    
    return(
        <div>
            <h1>Sadly you were logged out...</h1><br />
            <p>Please do not be afraid to use our wonderful services again!</p><br />
            <img src='https://media.istockphoto.com/photos/anxious-arabic-woman-feel-unhappy-thinking-at-home-picture-id1267716518?b=1&k=20&m=1267716518&s=170667a&w=0&h=uU5ZZVI3lTEB0Z4TzNtDnztPwiUdrCvbspkSix-vUn4=' alt='sad women is sad you logged out'/>
        </div>
    );
}

export default Logout;