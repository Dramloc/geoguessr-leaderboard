import styled from "@emotion/styled";
import tw from "twin.macro";

export const Panel = styled("div")(
  tw`shadow sm:rounded-lg`,
  tw`(bg-white)`,
  tw`dark:(bg-gray-800)`
);

export const PanelContent = styled("div")(tw`px-4 py-6 sm:p-6`);
