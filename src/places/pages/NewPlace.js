// Import of Components
import Input from "../components/Input";

// Imports for Styling
import styled from "styled-components";

const NewPlace = () => {
  return (
    <StyledForm>
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a valid Title"
      />
    </StyledForm>
  );
};

// Styled Components
const StyledForm = styled.form`
  position: relative;
  list-style: none;
  margin: 0 auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 6px;
  background: white;
`;

export default NewPlace;
