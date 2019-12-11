import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SavedList = props => (
    <div className="App">
        {console.log(user)}
        <form onSubmit={event => handleSubmit(event)}>
            <label>
            Name:
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={event => handleChange(event)}
            />
            </label>
            <label>
            Email:
            <input
                type="text"
                name="email"
                value={user.email}
                onChange={event => handleChange(event)}
            />
            </label>
            <label>
            Role:
            <input
                type="text"
                name="role"
                value={user.role}
                onChange={event => handleChange(event)}
            />
            </label>
            <button>Submit!</button>
        </form>
        </div>
);

export default Form;