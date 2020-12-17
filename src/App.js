// Imports from React Router Dom
import { Route, Redirect, Switch } from "react-router-dom";

// Imports of Pages
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

// Import of Global Styles
import GlobalStyle from "./shared/GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Users} />
        <Route exact path="/places/new" component={NewPlace} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
