/** @jsxImportSource @emotion/react */
import { Auth0Provider, withAuthenticationRequired } from "@auth0/auth0-react";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "twin.macro";
import { GlobalStyles } from "twin.macro";
import { Layout } from "./shared/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const HomeScreen = withAuthenticationRequired(
  lazy(() => import("./home/HomeScreen"))
);

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Auth0Provider
          domain="geoguessr-leaderboard.us.auth0.com"
          clientId="Vu8E5T6HTFZt9hfmmSvvM7QAZJ135vW3"
          redirectUri={window.location.origin}
        >
          <BrowserRouter>
            <Layout>
              <Suspense fallback={null}>
                <Switch>
                  <Route path="/" exact component={HomeScreen} />
                </Switch>
              </Suspense>
            </Layout>
          </BrowserRouter>
        </Auth0Provider>
      </QueryClientProvider>
    </>
  );
};

export default App;
