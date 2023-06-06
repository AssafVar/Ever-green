"use client";
import React, { FormEvent } from 'react';
import Layout from "@/components/layout/layout";
import { Providers } from "@/components/Providers";
import { Button, FormControl, InputLabel, TextField, Typography } from '@mui/material';
import { FormLine, SubmitButtonProps, UserInputFieldProps } from '@/typings';

const InputField: React.FC<UserInputFieldProps> = ({ label, type, id, autoComplete, autoFocus, required }: any) => (
  <div className="mb-4">
    <FormControl fullWidth margin="normal" variant="outlined">
      <Typography variant="body2" component="label" color="textSecondary" style={{ fontWeight: 'bold' }}>
        {label}
      </Typography>
      <TextField
        type={type}
        id={id}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        required={required}
      />
    </FormControl>
  </div>
);

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => (
  <Button
    type="submit"
    className="w-full text-white py-2 px-4 rounded-md bg-indigo-500 hover:bg-indigo-600 transition duration-200"
    color='primary'
    variant="contained"
  >
    {text}
  </Button>
);

const LoginPage: React.FC = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements }: any = event.currentTarget;
    const formDetails: FormLine[] = [];
    for (let i = 0; i < elements.length - 1; i++) {
      elements[i].type != 'fieldset' && formDetails.push({
        name: elements[i].id,
        value: elements[i].value
      })
    }
    console.log(formDetails)
  };

  return (
    <Providers>
      <Layout>
        <div className="flex justify-center items-center h-screen bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md max-w-sm w-full">
            <h1 className="text-2xl font-bold mb-6">Login</h1>
            <form onSubmit={handleSubmit}>
              <InputField
                label="Username"
                type="text"
                id="username"
                autoComplete="username"
                autoFocus
                required
              />
              <InputField
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                required
              />
              <SubmitButton text="Sign In" />
            </form>
          </div>
        </div>
      </Layout>
    </Providers>
  );
};

export default LoginPage
