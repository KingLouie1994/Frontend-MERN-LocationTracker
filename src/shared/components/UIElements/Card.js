// Imports for Styling
import styled from "styled-components";

const Card = (props) => {
  return (
    <StyledCard className={`card ${props.className}`} style={props.style}>
      {props.children}
    </StyledCard>
  );
};

// Styled Components
const StyledCard = styled.div`
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  padding: 1rem;
  overflow: hidden;
  background: white;
`;

export default Card;
