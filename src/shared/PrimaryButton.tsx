import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import tw from "twin.macro";

export const PrimaryButton = styled("button")(
  tw`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm`,
  tw`svg:(-ml-1 mr-3 h-5 w-5)`,
  tw`(text-white bg-primary-600 hover:(bg-primary-700) focus:(outline-none ring-2 ring-offset-2 ring-primary-500))`,
  tw`dark:(text-white bg-primary-500 hover:(bg-primary-600) focus:(outline-none ring-2 ring-offset-2 ring-primary-500 ring-offset-gray-800))`,
  ({ disabled }) => disabled && tw`(opacity-50 pointer-events-none)`
);

export const PrimaryButtonLink = PrimaryButton.withComponent(Link);
