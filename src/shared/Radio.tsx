/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { RegisterOptions, useFormContext } from "react-hook-form";
import tw from "twin.macro";
import { useFormId } from "./FormGroup";

export const RadioBase = styled("input")(
  tw`h-4 w-4 text-primary-600 border-gray-300`,
  tw`focus:(ring-primary-500)`,
  tw`disabled:(opacity-50 cursor-not-allowed)`
);
RadioBase.defaultProps = {
  type: "radio",
};

export type RadioProps = {
  rules?: RegisterOptions;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Radio: React.FC<RadioProps> = ({ rules, ...props }) => {
  const { register } = useFormContext();
  const id = useFormId();
  return <RadioBase id={id} ref={register(rules)} {...props} />;
};
