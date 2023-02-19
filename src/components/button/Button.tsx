import { FC } from 'react';

import { StyledButton } from './Button.styles';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = (props): JSX.Element => {
  const { children, ...rest } = props;

  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
