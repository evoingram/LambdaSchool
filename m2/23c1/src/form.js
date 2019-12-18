import React, { useState } from 'react';
import TeamMembersData from './teamMembersData'

const Form = props => {
    
    const [user, setUser] = useState({ name: "", email: "", role: "" });

    const [users, setUsers] = useState(TeamMembersData);

    const addUser = user => {
        setUsers( [...users, user] );
    };

    const handleChange = event => { setUser({ ...user, [event.target.name]: event.target.value }); };

    const handleSubmit = event => {
        event.preventDefault();
        setUser({ ...user, [event.target.name]: event.target.value });
        console.log("user variable on submit:  " + `${user}:  ${user.name} ${user.email} ${user.role}`);
        console.log("users variable on submit " + `${users}`);
        addUser(user);
    }

        // users.setState(users);   
    
return (
    
    <div className="App">
        <form onSubmit={handleSubmit}>
            <label>
                Name:
            <input
                    type="text"
                    name="name"
                    placeholder="Enter name here"
                    value={user.name}
                    onChange={handleChange}
                />
            </label>
            <label>
                Email:
            <input
                    type="text"
                    name="email"
                    placeholder="Enter e-mail here"
                    value={user.email}
                    onChange={handleChange}
                />
            </label>
            <label>
                Role:
            <input
                    type="text"
                    name="role"
                    placeholder="Enter job role here"
                    value={user.role}
                    onChange={handleChange}
                />
            </label>
      <button type="submit" onClick={handleSubmit}>Submit!</button>
        </form>
    </div>
    
);
}

export default Form;