import ReactDOM from "react-dom";

// Imports for Styling
import styled from "styled-components";

const Backdrop = (props) => {
  return ReactDOM.createPortal(
    <StyledBackdrop onClick={props.onClick}></StyledBackdrop>,
    document.getElementById("backdrop-hook")
  );
};

// Styled Components
const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
`;

export default Backdrop;
