import React, { useState } from 'react';
import React from "react";
import { withFormik, Form, Field } from "formik";
// import TeamMembersData from './teamMembersData'

function LoginForm() {
  return (
    <Form>
      <Field type="text" name="name" placeholder="Name" />
      <Field type="email" name="email" placeholder="Email" />
      <Field type="password" name="password" placeholder="Password" />
      <Field type="checkbox" name="termsofservice" placeholder="false"/>
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
      termsofservice: termsofservice || ""
    };
  },
handleSubmit(values) {
    console.log(values);
    //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
  }
})(LoginForm);

export default Form;