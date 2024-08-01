import React from 'react';
import MUIButton from '@mui/material/Button';

interface ButtonProps {
  content: string;
}

const Button: React.FC<ButtonProps> = ({ content }) => {
  return (
    <MUIButton variant="contained">{content}</MUIButton>
  );
}

export default Button;
