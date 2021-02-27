/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { RegisterOptions, useFormContext } from "react-hook-form";
import tw from "twin.macro";
import { useFormId } from "./FormGroup";

export const TextareaBase = styled("textarea")(
  tw`block w-full shadow-sm sm:text-sm border-gray-300 rounded-md`,
  tw`focus:(ring-primary-500 border-primary-500)`,
  tw`disabled:(opacity-50 cursor-not-allowed)`
);

export type TextareaProps = {
  rules?: RegisterOptions;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea: React.FC<TextareaProps> = ({ rules, ...props }) => {
  const { register } = useFormContext();
  const id = useFormId();
  return <TextareaBase id={id} ref={register(rules)} {...props} />;
};
