"use client";
import React, { FormEvent } from 'react';
import Layout from "@/components/layout/layout";
import { Providers } from "@/components/Providers";
import { getFormElements } from '@/lib/formFunctions';
import { InputField, SubmitButton } from '@/components/MuiComponents';

const LoginPage: React.FC = () => {
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements }: any = event.currentTarget;
    const formDetails = getFormElements(elements)
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
