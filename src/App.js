// Imports from React
import { useState, useCallback } from "react";

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

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <div>
        <GlobalStyle />
        <MainNavigation />
        <main>
          <Switch>
            <Route exact path="/" component={Users} />
            <Route exact path="/auth" component={Auth} />
            <Route exact path="/:userId/places" component={UserPlaces} />
            <Route exact path="/places/new" component={NewPlace} />
            <Route exact path="/places/:placeId" component={UpdatePlace} />
            <Redirect to="/" />
          </Switch>
        </main>
      </div>
    </AuthContext.Provider>
  );
};

export default App;
