import { FC } from 'react';

import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = (props): JSX.Element => {
  const { children, ...rest } = props;

  return <button {...rest}>{children}</button>;
};

export default Button;
