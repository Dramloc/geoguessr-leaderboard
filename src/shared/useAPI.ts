import { useAuth0 } from "@auth0/auth0-react";
import ky from "ky";

export const useAPI = () => {
  const { getAccessTokenSilently } = useAuth0();
  const api = ky.extend({
    prefixUrl: process.env.REACT_APP_API_URL,
    hooks: {
      beforeRequest: [
        async (request) => {
          const accessToken = await getAccessTokenSilently();
          request.headers.set("authorization", `Bearer ${accessToken}`);
        },
      ],
    },
  });
  return api;
};
