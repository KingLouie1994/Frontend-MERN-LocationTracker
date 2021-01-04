// Imports of Components
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from "../../shared/components/FormElements/Button";

// Imports for Styling
import styled from "styled-components";

const PlaceList = (props) => {
  return (
    <div>
      {props.items.length === 0 ? (
        <StyledPlaceList className="center">
          <Card>
            <h2>No places found. Maybe create one?</h2>
            <Button to="/places/new">Share Place</Button>
          </Card>
        </StyledPlaceList>
      ) : (
        <StyledPlaceList>
          {props.items.map((place) => (
            <PlaceItem
              key={place.id}
              id={place.id}
              image={place.imageUrl}
              title={place.title}
              description={place.description}
              address={place.address}
              creatorId={place.creator}
              coordinates={place.location}
            />
          ))}
        </StyledPlaceList>
      )}
    </div>
  );
};

// Styled Components
const StyledPlaceList = styled.ul`
  list-style: none;
  margin: 1rem auto;
  padding: 0;
  width: 90%;
  max-width: 40rem;
`;

export default PlaceList;
