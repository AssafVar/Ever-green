"use client";

import React, { useContext, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from '@/components/layout/layout';
import { Providers } from '@/components/Providers';
import { InputField, SubmitButton } from '@/components/MuiComponents';
import { Link, Typography } from '@mui/material';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_LOGIN } from '@/graphql/queries';
import { userContext } from '@/lib/contexts/userContext';
import { customTheme } from '../theme/themes';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Cookies from 'js-cookie';

const LoginPage: React.FC = () => {

  const theme = customTheme;
  const router = useRouter();
  const { setNewUser } = useContext(userContext)

  const [isLoading, setIsloading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMEssage] = useState<string>('');

  const initialValues = {
    email: '',
    password: '',
  };

  const [loginQuery, { loading, error, data }] = useLazyQuery(GET_USER_LOGIN, {
    variables: {
      email: initialValues.email,
      password: initialValues.password,
    },
  });
  const validationSchema = Yup.object({
    password: Yup.string().required('Password is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    setSubmitting(false);
    setIsloading(true);
    const { email, password } = values;
    try {
      const response: any = await axios.post('api/auth/login', { email, password });
      console.log(response);
      setIsloading(false);
      if (response?.status === 200 ) {
        console.log(response.data);
        const cookieValue = Cookies.get('user');
        const { firstName, lastName, email } = cookieValue && JSON.parse(cookieValue);
        setNewUser({ firstName, lastName, email });
        router.push('/');
      }
    } catch (error: any) {
      setErrorMessage(error?.response?.data?.error);
      setIsloading(false);
    }
  };

  return (
    <Providers>
      <Layout>
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md max-w-sm w-full">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
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
                    <SubmitButton text="Login" disabled={isSubmitting} loading={isLoading} />
                  </div>
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
                    New user?{' '}
                    <Link color="primary" href="/signup">
                      Signup for a new account
                    </Link>
                  </Typography>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Layout>
    </Providers>
  );
};

export default LoginPage;
