"use client";

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from '@/components/layout/layout';
import { Providers } from '@/components/Providers';
import { InputField, SubmitButton } from '@/components/MuiComponents';
import { Link, Typography } from '@mui/material';
import { customTheme } from '../theme/themes';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { INSERT_USER } from '@/graphql/queries';
import bcrypt from 'bcryptjs';


const SignupPage: React.FC = () => {
    const theme = customTheme;
    const router = useRouter();

    const [isLoading, setIsloading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [successMessage, setSuccessMessage] = useState<string>('');

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

    const [insertUser, { data, error, loading }] = useMutation(INSERT_USER);


    const handleSubmit = async (values: any, { setSubmitting }: any) => {
        setSubmitting(false);
        setIsloading(true);
        const saltRounds = 10
        try {
            const hashPassword = await bcrypt.hash(values.password, saltRounds);
            const token = await insertUser({
                variables: {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    email: values.email,
                    password: hashPassword,
                    role: 'user',
                }
            });
            if (token) {
                setIsloading(false);
                setSuccessMessage('User successfully registered');
                setTimeout(() => {
                    setSuccessMessage('');
                    //router.push('/');
                }, 1000)
            }
        }catch (error: any) {
                setIsloading(false);
                if (error?.message === 'P2002') {
                    setErrorMessage('This email is already registered');
                } else {
                    setErrorMessage('Could not set submission');
                }
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000)
        }
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
                                        <SubmitButton text="Sign Up" disabled={isSubmitting} loading={isLoading} />

                                    </div>
                                </Form>
                            )}
                        </Formik>
                        {errorMessage && (
                            <Typography variant="body1" color="error" className="mt-4">
                                {errorMessage}
                            </Typography>
                        )}
                        {successMessage && (
                            <Typography variant="body1"
                                sx={{ color: theme.palette.secondary.main }}
                                color="warning" className="mt-4">
                                {successMessage}
                            </Typography>
                        )}
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
