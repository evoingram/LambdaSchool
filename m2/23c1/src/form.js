import React, { useState, useEffect } from 'react';

const Form = props => (

    
    <div className="App">
        {console.log(props)}
        <form onSubmit={event => {setUser(event.target.value);}}>
            <label>
            Name:
            <input
                type="text"
                name="name"
                value={props.name}
                onChange={event => {setUser(event.target.value);}}
            />
            </label>
            <label>
            Email:
            <input
                type="text"
                name="email"
                value={props.email}
                onChange={event => {setUser(event.target.value);}}
            />
            </label>
            <label>
            Role:
            <input
                type="text"
                name="role"
                value={props.role}
                onChange={event => {setUser(event.target.value);}}
            />
            </label>
            <button>Submit!</button>
        </form>
    </div>
    
);

export default Form;