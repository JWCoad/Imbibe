//pull in elements
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MenusPage from "./pages/MenusPage";
import LoginPage from "./pages/LoginPage";
import BookingsPage from "./pages/BookingsPage";
import { LoginContext } from "./utilities/contexts/login-context";
import { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [userInfo, setUserInfo] = useState(null);
  return (
    <div className="App">
      <LoginContext.Provider value={{ userInfo, setUserInfo }}>
        <ApolloProvider client={client}>
          <Layout>
            <Switch>
              <Route path="/menu">
                <MenusPage />
              </Route>
              <Route path="/bookings">
                <BookingsPage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </Layout>
        </ApolloProvider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
