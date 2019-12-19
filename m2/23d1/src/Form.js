import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useInput } from './CustomHooks/InputHook'
import styled from 'styled-components'
import UsersData from './UsersData'

const Button = styled.button`
  background: #002244;
  border-radius: 3px;
  border: 2px solid #69BE28;
  color: #A5ACAF;
  font-weight: bold;
  margin: 0 1em;
  padding: 0.25em 1em;
`
/*
function setDataStates(response) { 
    const [fullName, setName] = useState("");
    const [fullEmail, setEmail] = useState("");
    const [fullPassword, setPW] = useState("");
    const [yesTOS, setTOS] = useState("");
    
    setName(response.name);
    // setEmail(res.email);
    // setPW(res.password);
    // setTOS(res.tos);


}

    const setDataStates = response => { 
        const [fullName, setName] = useState("");
        const [fullEmail, setEmail] = useState("");
        const [fullPassword, setPW] = useState("");
        const [yesTOS, setTOS] = useState("");
        
        setName(response.name);
        // setEmail(res.email);
        // setPW(res.password);
        // setTOS(res.tos);
    }
    */
function LoginForm({ values, errors, touched, isSubmitting }) {

    const [user, setUser] = useState({});
    //const [fullName, setName] = useState("");
    //const [fullEmail, setEmail] = useState("");
    //const [fullPassword, setPW] = useState("");
    //const [yesTOS, setTOS] = useState("");


    const [users, setUsers] = useState([...UsersData]);

    const addUser = user => {
        setUsers( [...users, user] );
    };

    
    const handleSubmit1 = event => { 
        setUser({ ...user, [event.target.name]: event.target.value });
        console.log("most recent added user = " + `${user}`);
        addUser(user);
        console.log("users = " + `${users}`);
    }


    useEffect(
        () => {
            setUser({
                name: `${values.name}`,
                email: `${values.email}`,
                password: `${values.password}`,
                tos: `${values.tos}`
            });
            addUser(user);
        }, [`${values.name}`, `${values.email}`, `${values.password}`, `${values.email}`]
    )

  return (
      <Form>
          {touched.name && errors.name && <p>{errors.name}</p>}
          {touched.email && errors.email && <p>{errors.email}</p>}
          {touched.password && errors.password && <p>{errors.password}</p>}
          {touched.tos && errors.tos && <p>{errors.tos}</p>}
          {
              /* <Field type="text" name="name" placeholder="Name" >{...bindName}</Field>
              <Field type="text" name="name" placeholder="Name" >{...bindName}</Field>
            <Field type="email" name="email" placeholder="Email" >{...bindEmail}</Field>
            <Field type="password" name="password" placeholder="Password" >{...bindPW}</Field>
            <label><Field type="checkbox" name="tos" checked={values.tos} />Accept TOS</label>
          */
          }
        <Field type="text" name="name" placeholder="Name" value={values.name} />
        <Field type="email" name="email" placeholder="Email" value={values.email} />
        <Field type="password" name="password" placeholder="Password" value={values.password} />
        <label><Field type="checkbox" name="tos" checked={values.tos} />Accept TOS</label>
        <Button type="submit" onClick={handleSubmit1}>Submit!</Button>
    </Form>
  );
}



const FormikForm = withFormik({
    
   
    mapPropsToValues({ name, email, password, tos }) {
        return {
        name: name || "",
        email: email || "",
        password: password || "",
        tos: tos || false
        };
        },
        // validation schema
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .min(5, "Name not valid")
                .required("Name is required"),
            email: Yup.string()
                .email("Email not valid")
                .required("Email is required"),
            password: Yup.string()
                .min(6, "Password must be 6 characters or longer")
                .required("Password is required"),
            tos: Yup.bool()
                .test(
                    'tos',
                    'You have to agree with our Terms of Service!',
                    value => value === true
                )
                .required(
                    'You have to agree with our Terms of Service!'
                ),
    }),

    handleSubmit(values, { props,  resetForm, setErrors, setSubmitting }) {

        if (values.email === "waffle@syrup.com") {
            setErrors({ email: "That email is already taken" });
        } else {
            axios
                .post("https://reqres.in/api/users", values)
                .then(res => {
                    console.log("response = " + res.data); // Data was created successfully and logs to console
                    resetForm();
                    setSubmitting(false);
                    console.log("response name = " + res.data.name);
                    //const [fullName, setName] = useState();
                    //const [user, setUser] = useState({});
                    //const [fullEmail, setEmail] = useState("");
                    //const [fullPassword, setPW] = useState("");
                    //const [yesTOS, setTOS] = useState("");
                    // setDataStates(res.data);
                    // set state for response to send to other component
                    //const [name, setName] = useState("");
                    // const [email, setEmail] = useState("");
                    // const [password, setPW] = useState("");
                    // const [tos, setTOS] = useState("");
                    /*
                    setUser({
                        name: res.data.name,
                        email: res.data.email,
                        password: res.data.password,
                        tos: res.data.tos
                    })
                    */
                    // setEmail(res.email);
                    // setPW(res.password);
                    // setTOS(res.tos);
                    
                    
                    //const [user, setUser] = useState({});

                    // const [users, setUsers] = useState([...UsersData]);

                    // const addUser = user => {
                    //    setUsers( [...users, user] );
                    //};

                    /*
                    setUser({
                        name: `${values.name}`,
                        email: `${values.email}`, 
                        password: `${values.password}`,
                        tos: `${values.tos}`
                    });
                    */
                    // console.log("user variable on submit:  " + `${user}:  ${name} ${email} ${tos}`);
                    //console.log("users variable on submit " + `${users}`);
                    //addUser(user);
                })
                .catch(err => {
                    console.log(err); // logs error creating the data 
                    setSubmitting(false);
                });
            
            //users.setState(users);
            console.log("individual variables on submit:  " + `${values.name} ${values.email} ${values.tos}`);
                
                    
            }
    }

})(LoginForm);

export default FormikForm;