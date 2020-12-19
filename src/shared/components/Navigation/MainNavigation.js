// Imports from React
import React from "react";

// Imports from React Router Dom
import { Link } from "react-router-dom";

// Imports of Components
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";

// Imports for Styling
import styled from "styled-components";

const MainNavigation = (props) => {
  return (
    <React.Fragment>
      <SideDrawer>
        <DrawerNav>
          <NavLinks />
        </DrawerNav>
      </SideDrawer>
      <MainHeader>
        <NavigationMenuButton>
          <span />
          <span />
          <span />
        </NavigationMenuButton>
        <NavigationTitle>
          <Link to="/">YourPlaces</Link>
        </NavigationTitle>
        <HeaderNav>
          <NavLinks />
        </HeaderNav>
      </MainHeader>
    </React.Fragment>
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
  a {
    text-decoration: none;
    color: white;
  }
`;

const HeaderNav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const DrawerNav = styled.nav`
  height: 100%;
`;

export default MainNavigation;
