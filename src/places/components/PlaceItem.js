// Imports from React
import React, { useState } from "react";

// Imports of Components
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";

// Imports for Styling
import styled from "styled-components";
import "./PlaceItem.css";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className="map-container">
          <h2>The Map!!!</h2>
        </div>
      </Modal>
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
            <Button inverse onClick={openMapHandler}>
              VIEW ON MAP
            </Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </PlaceItemActions>
        </Card>
      </StyledPlaceItem>
    </React.Fragment>
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
    margin: 0.5rem;
  }
`;

export default PlaceItem;
