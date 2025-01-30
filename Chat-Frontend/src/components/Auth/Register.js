import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { username, email, password, confirmPassword } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
        } else {
            console.log('Form submitted', formData);
            // Add your registration logic here
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" value={username} onChange={onChange} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} required />
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={onChange} required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;