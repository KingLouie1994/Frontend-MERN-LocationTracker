// Import Components
import UserItem from "./UserItem";

// Imports for Styling
import styled from "styled-components";

const UsersList = ({items}) => {
  console.log(items);
  if ((items.length = 0)) {
    return (
      <UsersListContainer>
        <h2>No users found</h2>
      </UsersListContainer>
    );
  }

  return (
    <ul>
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
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
