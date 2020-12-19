// Imports from React Router Dom
import { Link } from "react-router-dom";

// Imports of Components
import MainHeader from "./MainHeader";

// Imports for Styling
import styled from "styled-components";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <NavigationMenuButton>
        <span />
        <span />
        <span />
      </NavigationMenuButton>
      <NavigationTitle>
        <Link to="/">Your Places</Link>
      </NavigationTitle>
      <nav>...</nav>
    </MainHeader>
  );
};

// Styled Components
const NavigationMenuButton = styled.button`
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 2rem;
  cursor: pointer;
  span {
    display: block;
    width: 3rem;
    height: 2.5px;
    background: white;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavigationTitle = styled.h1`
  color: white;
  a {
    text-decoration: none;
    color: white;
  }
`;

// .main-navigation__header-nav {
//   display: none;
// }

// .main-navigation__drawer-nav {
//   height: 100%;
// }

//   .main-navigation__header-nav {
//     display: block;
//   }
// }

export default MainNavigation;
