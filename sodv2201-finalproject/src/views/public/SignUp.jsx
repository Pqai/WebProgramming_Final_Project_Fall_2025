import React, {useState} from 'react';
import { useSignUp } from '../../routes/public/signup.component';

//function

export const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    
}