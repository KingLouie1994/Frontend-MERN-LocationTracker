// Imports for Styling
import styled from "styled-components";

const Avatar = (props) => {
  return (
    <StyledAvatar className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </StyledAvatar>
  );
};

// Styled Components
const StyledAvatar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Avatar;
