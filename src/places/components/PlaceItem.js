// Imports of Components
import Card from "../../shared/components/Card";

// Imports for Styling
import styled from "styled-components";

const PlaceItem = (props) => {
  return (
    <StyledPlaceItem>
      <Card style={{ padding: 0 }}>
        <PlaceItemImage>
          <img src={props.image} alt={props.title} />
        </PlaceItemImage>
        <PlaceItemInfo>
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </PlaceItemInfo>
        <PlaceItemActions>
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </PlaceItemActions>
      </Card>
    </StyledPlaceItem>
  );
};

// Styled Components
const StyledPlaceItem = styled.li`
  margin: 1rem 0;
`;

const PlaceItemImage = styled.div`
  width: 100%;
  height: 12.5rem;
  margin-right: 1.5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    height: 20rem;
  }
`;

const PlaceItemInfo = styled.div`
  padding: 1rem;
  text-align: center;
  h2,
  h3,
  p {
    margin: 0 0 0.5rem 0;
  }
`;

const PlaceItemActions = styled.div`
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #ccc;
  button,
  a {
      padding: 0rem 0.2rem;
    margin: 0.5rem;
  }
`;

//   .place-item__modal-content {
//     padding: 0;
//   }

//   .place-item__modal-actions {
//     text-align: right;
//   }

export default PlaceItem;
