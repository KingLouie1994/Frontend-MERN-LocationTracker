// Imports from React Router Dom
import { Link } from "react-router-dom";

// Imports of Components
import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";

// Imports for Styling
import styled from "styled-components";

const User = (props) => {
  return (
    <StyledUser>
      <Card className="userContent">
        <Link to={`/${props.id}/places`}>
          <UserImage>
            <Avatar
              image={process.env.REACT_APP_ASSET_URL + `${props.image}`}
              alt={props.name}
            />
          </UserImage>
          <UserInfo>
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </UserInfo>
        </Link>
      </Card>
    </StyledUser>
  );
};

// Styled Components
const StyledUser = styled.li`
  margin: 1rem;
  width: calc(45% - 2rem);
  min-width: 17.5rem;
  :hover {
    h2 {
      color: #292929;
    }
    h3 {
      color: #292929;
    }
  }
  :active {
    h2 {
      color: #292929;
    }
    h3 {
      color: #292929;
    }
  }
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    padding: 1rem;
    color: white;
    background: #292929;
  }
  a:hover {
    background: #ffd900;
  }
  a:active {
    background: #ffd900;
  }
  .userContent {
    padding: 0;
  }
`;

const UserImage = styled.div`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;

const UserInfo = styled.div`
  h2 {
    font-size: 1.5rem;
    margin: 0 0 0.5rem 0;
    font-weight: normal;
    color: #ffd900;
  }
  h3 {
    margin: 0;
  }
`;

export default User;
