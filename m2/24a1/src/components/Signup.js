import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import { useInput } from './CustomHooks/InputHook'
import styled from 'styled-components';
import loadForm from './old pages/Form.js/index.js';
import { Link } from 'react-router-dom';

const Button = styled.button`
  background: #002244;
  border-radius: 3px;
  border: 2px solid #69BE28;
  color: #A5ACAF;
  font-weight: bold;
  margin: 0 1em;
  padding: 0.25em 1em;
`
const UserForm = ({ values, errors, touched, isSubmitting, status }) => {
    const [user, setUser] = useState();
    useEffect(() =>{
        console.log(status);
        status && setUser(user => [...user, status]);
    }, [status]);

    function registerUser(){
        // TODO:  axios put request
        // TODO:  update users to include new user as student
    }

    return (
        <div className='user-form'>      
        <Form>
            {touched.email && errors.email && <p>{errors.email}</p>}
            {touched.password && errors.password && <p>{errors.password}</p>}
            {touched.cPassword && errors.cPassword && <p>{errors.cPassword}</p>}
            <Field type="email" name="email" placeholder="Email" value={values.email} />
            <Field type="password" name="password" placeholder="Password" value={values.password} />
            <Field type="password" name="cPassword" placeholder="Confirm password" value={values.cPassword} />
            <Button type="submit" onClick={registerUser}>Sign up!</Button>
        </Form>
        </div>
      
  );
}


const FormikForm = withFormik({    
    mapPropsToValues({ email, password, cPassword }) {
        return {
        email: email || "",
        password: password || "",
        cPassword: cPassword || ""
        };
        },
        // validation schema
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email("Email not valid")
                .required("Email is required"),
            password: Yup.string()
                .min(6, "Password must be 6 characters or longer")
                .required("Password is required"),
            cPassword: Yup.string()
                .label('Confirm password')
                .required()
                .test('passwords-match', 'Passwords must match.', function(value) {
                return this.parent.password === value;
                }),
    }),

    handleSubmit(values, { setStatus, resetForm, setErrors, setSubmitting }) {
        
            axios
                .get("http://localhost:3000/userinfo?email=" + values.email, values)
                .then(res => {
                    console.log("login response = " + res.data); // Data was created successfully and logs to console
                    setStatus(res.data);
                    resetForm();
                    setSubmitting(false);
                    loadForm();
                })
                .catch(err => {
                    console.log(err); // logs error creating the data 
                    setSubmitting(false);
                });                
                   
    }

})(UserForm);

export default FormikForm;