// Imports from React Router Dom
import { Route, Redirect, Switch } from "react-router-dom";

// Imports of Pages
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

// Imports of Components
import MainNavigation from "./shared/components/Navigation/MainNavigation";

// Import of Global Styles
import GlobalStyle from "./shared/GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <MainNavigation />
      <main>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route exact path="/places/new" component={NewPlace} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
};

export default App;
