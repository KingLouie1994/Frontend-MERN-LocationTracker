// Imports from React
import React from "react";

// Imports from React Router Dom
import { Route, Redirect, Switch } from "react-router-dom";

// Import of Custom Hooks
import { useAuth } from "./shared/hooks/auth-hook";

// Import of Pages
import Auth from "./user/pages/Auth";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";

// Import of Components
import MainNavigation from "./shared/components/Navigation/MainNavigation";

// Import of Contexts
import { AuthContext } from "./shared/context/auth-context";

// Import of Global Styles
import GlobalStyle from "./shared/GlobalStyle";

const App = () => {
  const {login, logout, token, userId} = useAuth();

  let routes;

  if (token) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <div>
        <GlobalStyle />
        <MainNavigation />
        <main>{routes}</main>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
