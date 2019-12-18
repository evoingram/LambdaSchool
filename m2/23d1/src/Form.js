import React, { useState } from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function LoginForm({ values, errors, touched, isSubmitting }) {
    const [users, setUsers] = useState([]);

    const addUser = user => {
        setUsers( [...users, user] );
    };
        
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

    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        if (values.email === "waffle@syrup.com") {
        setErrors({ email: "That email is already taken" });
        } else {
        axios
            .post("https://reqres.in/", values)
            .then(res => {
            console.log(res); // Data was created successfully and logs to console
            resetForm();
                setSubmitting(false);
                // set state for response to send to other component
            })
            .catch(err => {
            console.log(err); // There was an error creating the data and logs to console
            setSubmitting(false);
            });
        }
    }

})(LoginForm);

export default FormikForm;