// Imports from React Router Dom
import { useParams } from "react-router-dom";

// Import Components
import Input from "../components/Input";
import Button from "../../shared/components/FormElements/Button";

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

  return (
    <div className="center">
      {identifiedPlace ? (
        <form>
          <Input
            id="title"
            element="input"
            type="text"
            label="Title"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Please enter a valid title."
            onInput={() => {}}
            value={identifiedPlace.title}
            valid={true}
          />
          <Input
            id="description"
            element="textarea"
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a description (at least 5 characters)."
            onInput={() => {}}
            value={identifiedPlace.description}
            valid={true}
          />
          <Button type="submit" disabled={true}>
            UPDATE PLACE
          </Button>
        </form>
      ) : (
        <h2>Could not find place!</h2>
      )}
    </div>
  );
};

export default UpdatePlace;
