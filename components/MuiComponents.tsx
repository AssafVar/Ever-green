import { InputFieldProps, SubmitButtonProps } from '@/typings';
import { LoadingButton } from '@mui/lab';
import { FormControl, TextField, Typography } from '@mui/material';
import React from 'react';
import customTheme from '@/app/theme/themes';


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

export const SubmitButton: React.FC<SubmitButtonProps> = ({ disabled, text, loading }) => (
<LoadingButton
  type="submit"
  className={`w-full py-2 px-4 rounded-md transition duration-200`}
  color='primary'
  variant="contained"
  disabled={disabled}
  loading={loading}
  sx={{
    backgroundColor: `${customTheme.palette.primary.main} !important`,
    '&:hover': {
      backgroundColor: `${customTheme.palette.primary.dark} !important`,
    },
  }}
>
  {text}
</LoadingButton>
);