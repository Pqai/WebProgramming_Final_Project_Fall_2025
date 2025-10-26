import React, {useState} from 'react';
import { useSignUp } from '../../routes/public/signup.component';

//function

export const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthday: '',
        department: 'SD', // Default to SD department
        program: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.PreventDefault();

        console.log('Form submitted:', formData);
    }
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const signUpContext = useSignUp();

    const {userProfiles, setUserProfiles} = signUpContext;
    //const
    
    const handleBirthdaySelect = () => {

    }



    return (
        <div className = "signup-container">
            <div className = "signup-form">
                <h1>User Sign Up Form</h1>
                
                <form onSubmit = {handleSubmit}>
                    <h3>Account Information</h3>
                    <div className ="form-section">

                        <label htmlFor="username">Username</label>
                        <input
                            type= "text"
                            id = "username"
                            name ="username"
                            value ={formData.username}
                            onChange={handleChange}
                            required
                        />


                    </div>

                    <div className ="form-row">
                        <div className ="form-group">
                            <label htmlFor="password">Password</label>
                        <input
                            type= "password"
                            id = "password"
                            name ="password"
                            value ={formData.password}
                            onChange={handleChange}
                            required
                        />
                        </div>
                    </div>

                    <div className ="form-row">
                        <div className ="form-group">
                            <label htmlFor="email">Email</label>
                        <input
                            type= "email"
                            id = "email"
                            name ="email"
                            value ={formData.email}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className = "form-group">
                            <label htmlFor ="phone">Phone Number</label>
                            <input
                                type ="tel"
                                id="phone"
                                name="phone"
                                vaue={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className = "form-group">
                        <label htmlFor="birthday">Birthday</label>
                        <input
                            type="date"
                            id="bithday"
                            name="birthday"
                            value={formData.birthday}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className ="form-section">
                        <h3>School Information</h3>

                        <div className="form-group">
                            <label htmlFor="department">Department</label>
                            <select
                                id="department"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                required
                            >
                                <option value="SD">Software Development</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="program">Program</label>
                            <select
                                id="program"
                                name="program"
                                value={formData.program}
                                onChange={handleChange}
                                required
                            >
                                <option value ="">Select a Program</option>
                                <option value ="diploma">Diploma (2 years)</option>
                                <option value ="post-diploma">Post-Diploma (1 year)</option>
                                <option value ="certificate">Certificate (6 months)</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">
                        Create Account
                    </button>



                </form>
            </div>
        </div>
    );
};