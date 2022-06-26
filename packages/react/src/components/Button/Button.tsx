import React from 'react';
import './button.css';
import { Button as ButtonCSS } from '../../../../css/src/components/Button';
import { styled } from '@stitches/react';

const StyledButton = styled('button', ButtonCSS);

interface ButtonProps {
   /**
    * Button contents
    */
   label: string;
   /**
    * Optional click handler
    */
   onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, ...props }: ButtonProps) => {
   return (
      <StyledButton type="button" {...props}>
         {label}
      </StyledButton>
   );
};
