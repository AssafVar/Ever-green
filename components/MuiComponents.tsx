import { InputFieldProps, SubmitButtonProps } from '@/typings';
import { Button, FormControl, TextField, Typography } from '@mui/material';
import React from 'react';


export const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  id,
  autoComplete,
  autoFocus,
  required,
  onChange,
  error,
  helperText,
  name,
}) => (
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
      onChange={onChange}
      error={error}
      helperText={helperText}
      name={name}
    />
  </FormControl>
);

export const SubmitButton: React.FC<SubmitButtonProps> = ({ disabled, text }) => (
  <Button
    type="submit"
    className="w-full text-white py-2 px-4 rounded-md bg-indigo-500 hover:bg-indigo-600 transition duration-200"
    color='primary'
    variant="contained"
    disabled={disabled}
  >
    {text}
  </Button>
);