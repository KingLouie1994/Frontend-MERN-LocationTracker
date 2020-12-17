// Imports from React Router Dom
import { Route, Redirect } from "react-router-dom";

// Imports of Pages
import Users from "./user/pages/Users";

// Import of Global Styles
import GlobalStyle from "./shared/GlobalStyle";

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Route exact path="/" component={Users} />
      <Redirect to="/" />
    </div>
  );
};

export default App;
