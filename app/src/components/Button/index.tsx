import React from "react";
import * as S from "./styles";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button = ({ onClick, label }: ButtonProps) => {
    return <S.Button onClick={onClick}>{label}</S.Button>;
};

export default Button;
