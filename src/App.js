// Imports from React
import React, { useState, useCallback } from "react";

// Imports from React Router Dom
import { Route, Redirect, Switch } from "react-router-dom";

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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = useCallback((uId) => {
    setIsLoggedIn(true);
    setUserId(uId);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/:userId/places" component={UserPlaces} />
        <Route exact path="/places/new" component={NewPlace} />
        <Route exact path="/places/:placeId" component={UpdatePlace} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/:userId/places" component={UserPlaces} />
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
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
