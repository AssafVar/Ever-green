"use client";

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from '@/components/layout/layout';
import { Providers } from '@/components/Providers';
import { InputField, SubmitButton } from '@/components/MuiComponents';
import { Link, Typography } from '@mui/material';

const SignupPage: React.FC = () => {
    const initialValues = {
        firstName: '',
        lastName: '',
        password: '',
        repassword: '',
        email: '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        password: Yup.string().required('Password is required')
        .min(4, "Password must be at least 4 characters"),
        repassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords do not match')
            .required('Please re-enter your password'),
        email: Yup.string().email('Invalid email').required('Email is required'),
    });
    
    const handleSubmit = (values:any, { setSubmitting }:any) => {
        setSubmitting(false);
        console.log(values);

      };

    return (
        <Providers>
            <Layout>
                <div className="flex justify-center items-center bg-gray-100 py-16">
                    <div className="bg-white p-8 rounded shadow-md max-w-sm w-full">
                        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, isSubmitting }) => (
                                <Form>
                                    <div>
                                        <Field
                                            as={InputField}
                                            name="firstName"
                                            type="text"
                                            label="First name"
                                            variant="outlined"
                                            fullWidth
                                            error={Boolean(errors.firstName && touched.firstName)}
                                            helperText={<ErrorMessage name="firstName" />}
                                            autoComplete="firstName"
                                        />
                                    </div>
                                    <div>
                                        <Field
                                            as={InputField}
                                            name="lastName"
                                            label="Last name"
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            error={Boolean(errors.lastName && touched.lastName)}
                                            helperText={<ErrorMessage name="lastName" />}
                                            autoComplete="lastName"
                                        />
                                    </div>
                                    <div>
                                        <Field
                                            as={InputField}
                                            type="password"
                                            name="password"
                                            label="Password"
                                            variant="outlined"
                                            fullWidth
                                            error={Boolean(errors.password && touched.password)}
                                            helperText={<ErrorMessage name="password" />}
                                            autoComplete="new-password"
                                            />
                                    </div>
                                    <div>
                                        <Field
                                            as={InputField}
                                            type="password"
                                            name="repassword"
                                            label="Re-enter Password"
                                            variant="outlined"
                                            fullWidth
                                            error={Boolean(errors.repassword && touched.repassword)}
                                            helperText={<ErrorMessage name="repassword" />}
                                            autoComplete="new-password"
                                        />
                                    </div>
                                    <div>
                                        <Field
                                            as={InputField}
                                            name="email"
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            error={Boolean(errors.email && touched.email)}
                                            helperText={<ErrorMessage name="email" />}
                                            autoComplete="email"
                                        />
                                    </div>
                                    <div>
                                        <SubmitButton text="Sign Up" disabled={isSubmitting}/>

                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <Typography className="mt-5">
                    Already a user?{' '}
                    <Link color="primary" href="/login">
                      Login to your account
                    </Link>
                  </Typography>
                    </div>
                </div>
            </Layout>
        </Providers>
    );
};

export default SignupPage;
