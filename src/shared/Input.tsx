/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { RegisterOptions, useFormContext } from "react-hook-form";
import tw from "twin.macro";
import { useFormId } from "./FormGroup";

export const InputBase = styled("input")(
  tw`block w-full shadow-sm sm:text-sm rounded-md`,
  tw`(bg-white text-gray-900 border-gray-300 focus:(ring-primary-500 border-primary-500))`,
  tw`dark:(bg-gray-900 text-white border-gray-700 focus:(ring-primary-400 border-primary-400))`,
  tw`disabled:(opacity-50 cursor-not-allowed)`
);
InputBase.defaultProps = {
  type: "text",
};

export type InputProps = {
  rules?: RegisterOptions;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({ rules, ...props }) => {
  const { register } = useFormContext();
  const id = useFormId();
  return <InputBase id={id} ref={register(rules)} {...props} />;
};

export type NumberInputProps = InputProps;

export const NumberInput: React.FC<NumberInputProps> = ({
  rules,
  ...props
}) => {
  return (
    <Input type="number" rules={{ valueAsNumber: true, ...rules }} {...props} />
  );
};
