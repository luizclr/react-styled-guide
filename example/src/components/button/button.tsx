import React, { ReactElement } from "react";

import { Button as StyledButton } from "./button.styles";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

export const Button = ({ text, onClick = () => {} }: ButtonProps): ReactElement => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
);
