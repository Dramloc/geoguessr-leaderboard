/** @jsxImportSource @emotion/react */
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

const HomeScreen = lazy(() => import("./home/HomeScreen"));

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Suspense fallback={null}>
              <Switch>
                <Route path="/" exact component={HomeScreen} />
              </Switch>
            </Suspense>
          </Layout>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
