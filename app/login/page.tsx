"use client";

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Layout from '@/components/layout/layout';
import { Providers } from '@/components/Providers';
import { InputField, SubmitButton } from '@/components/MuiComponents';
import { Link, Typography } from '@mui/material';

const LoginPage: React.FC = () => {

  const [isLoading, setIsloading] = useState<boolean>(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    password: Yup.string().required('Password is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    setSubmitting(false);
    console.log(values);

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
                    <SubmitButton text="Sign Up" disabled={isSubmitting} loading={isLoading}/>
                  </div>
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
