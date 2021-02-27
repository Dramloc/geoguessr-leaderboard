import styled from "@emotion/styled";
import tw from "twin.macro";
import { useFormId } from "./FormGroup";

export const LabelBase = styled("label")(
  tw`block font-medium text-base sm:text-sm`,
  tw`(text-gray-700)`,
  tw`dark:(text-gray-300)`
);

export const GroupLabelBase = styled("div")(
  tw`block font-medium text-base sm:text-sm`,
  tw`(text-gray-900 sm:text-gray-700)`,
  tw`dark:(text-gray-100 sm:text-gray-300)`
);

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export const Label: React.FC<LabelProps> = (props) => {
  const id = useFormId();
  return <LabelBase htmlFor={id} {...props} />;
};
