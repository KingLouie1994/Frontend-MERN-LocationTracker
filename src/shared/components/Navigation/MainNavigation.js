// Imports from React
import React, { useState } from "react";

// Imports from React Router Dom
import { Link } from "react-router-dom";

// Imports of Components
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../Backdrop";

// Imports for Styling
import styled from "styled-components";

const MainNavigation = (props) => {
  // Initialise State
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // Handlers
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <DrawerNav>
          <NavLinks />
        </DrawerNav>
      </SideDrawer>
      <MainHeader>
        <NavigationMenuButton onClick={openDrawerHandler}>
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
