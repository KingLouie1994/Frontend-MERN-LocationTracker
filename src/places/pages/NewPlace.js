// Import self created Hooks
import { useForm } from "../../shared/hooks/form-hook";

// Import of Components
import Input from "../../shared/components/UIElements/Input";
import Button from "../../shared/components/FormElements/Button";

// Import for Validation
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

// Imports for Styling
import styled from "styled-components";

const NewPlace = () => {
  const [formState, inputHandler] = useForm({
    title: {
      value: "",
      isValid: false,
    },
    description: {
      value: "",
      isValid: false,
    },
    adress: {
      value: "",
      isValid: false
    }
  }, false)

  // Event Handler Functions
  const placeSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs); // Later this gets sent to the backend
  };

  return (
    <StyledForm onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="adress"
        element="input"
        label="Adress"
        validators={[VALIDATOR_REQUIRE()]} // The check if the address exists will take place on the backend
        errorText="Please enter a adress."
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE{" "}
      </Button>
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
