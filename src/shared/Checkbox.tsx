/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { RegisterOptions, useFormContext } from "react-hook-form";
import tw from "twin.macro";
import { useFormId } from "./FormGroup";

export const CheckboxBase = styled("input")(
  tw`h-4 w-4 rounded`,
  tw`(text-primary-600 border-gray-300 focus:(ring-primary-500))`,
  tw`dark:(bg-gray-900 text-primary-500 border-gray-700 focus:(ring-primary-400 ring-offset-gray-800) checked:(border-transparent bg-primary-500))`,
  tw`disabled:(opacity-50 cursor-not-allowed)`
);
CheckboxBase.defaultProps = {
  type: "checkbox",
};

export type CheckboxProps = {
  rules?: RegisterOptions;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox: React.FC<CheckboxProps> = ({ rules, ...props }) => {
  const { register } = useFormContext();
  const id = useFormId();
  return <CheckboxBase id={id} ref={register(rules)} {...props} />;
};
