import React, { useState } from 'react';
import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
// import TeamMembersData from './teamMembersData'

function LoginForm({ errors, touched }) {
  return (
      <Form>
          {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type="text" name="name" placeholder="Name" />
          {touched.email && errors.email && <p>{errors.email}</p>}
          <Field type="email" name="email" placeholder="Email" />
          {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
          {touched.tos && errors.tos && <p>{errors.tos}</p>}
        <label><Field type="checkbox" name="tos" checked={values.tos} />Accept TOS</label>
        <button>Submit!</button>
    </Form>
  );
}

const Form = withFormik({
  mapPropsToValues({ name, email, password, termsofservice }) {
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

handleSubmit(values) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
})(LoginForm);

export default Form;