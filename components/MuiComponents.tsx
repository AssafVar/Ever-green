import { SubmitButtonProps, UserInputFieldProps } from '@/typings';
import { Button, FormControl, TextField, Typography } from '@mui/material';
import React from 'react';

export const InputField: React.FC<UserInputFieldProps> = ({ label, type, id, autoComplete, autoFocus, required }: any) => (
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

export const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => (
    <Button
      type="submit"
      className="w-full text-white py-2 px-4 rounded-md bg-indigo-500 hover:bg-indigo-600 transition duration-200"
      color='primary'
      variant="contained"
    >
      {text}
    </Button>
  );