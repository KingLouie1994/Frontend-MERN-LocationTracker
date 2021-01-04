// Import self created Hooks
import { useForm } from "../../shared/hooks/form-hook";

// Imports from React Router Dom
import { useParams } from "react-router-dom";

// Import Components
import Input from "../components/Input";
import Button from "../../shared/components/FormElements/Button";

// Imports for Styling
import styled from "styled-components";

// Import for Validation
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

// Import Dummy Data
import { DUMMY_PLACES } from "./UserPlaces";

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  const [formState, inputHandler] = useForm(
    {
      title: {
        value: identifiedPlace.title,
        isValid: true,
      },
      description: {
        value: identifiedPlace.description,
        isValid: true,
      },
    },
    true
  );

  // Event Handler Functions
  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs); // Later this gets sent to the backend
  };

  return (
    <div className="center">
      {identifiedPlace ? (
        <StyledForm onSubmit={placeUpdateSubmitHandler}>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title."
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a description (at least 5 characters)."
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
          />
          <Button type="submit" disabled={!formState.isValid}>
            UPDATE PLACE
          </Button>
        </StyledForm>
      ) : (
        <h2>Could not find place!</h2>
      )}
    </div>
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

export default UpdatePlace;
