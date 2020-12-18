// Import Components
import UserItem from "./UserItem";

// Imports for Styling
import styled from "styled-components";

const UsersList = (props) => {
  return (
    <UsersListContainer>
      {props.items.length === 0 ? (
        <h2>No users found</h2>
      ) : (
        <ul className="users-list">
          {props.items.map((user) => (
            <UserItem
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places}
            />
          ))}
        </ul>
      )}
    </UsersListContainer>
  );
};

// Styled Components
const UsersListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default UsersList;
