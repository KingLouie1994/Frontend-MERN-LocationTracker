// Imports from React
import ReactDOM from "react-dom";

// Imports from third party librabries
import { CSSTransition } from "react-transition-group";

// Imports for Styling
import styled from "styled-components";

const SideDrawer = (props) => {
  const content = (
    <CSSTransition
      in={props.show}
      timeout={750}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
    >
      <StyledSideDrawer onClick={props.onClick}>{props.children}</StyledSideDrawer>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

// Styled Components
const StyledSideDrawer = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  height: 100vh;
  width: 70%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

export default SideDrawer;
