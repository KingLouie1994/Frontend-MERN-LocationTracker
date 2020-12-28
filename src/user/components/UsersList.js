// Imports of Components
import User from "./User";
import Card from "../../shared/components/UIElements/Card";

// Imports for Styling
import styled from "styled-components";

const UsersList = ({ users }) => {
  return (
    <UsersListContainer>
      {users.length === 0 ? (
        <Card>
          <h2>No users found</h2>
        </Card>
      ) : (
        <StyledUsersList>
          {users.map((user) => (
            <User
              key={user.id}
              id={user.id}
              image={user.image}
              name={user.name}
              placeCount={user.places}
            />
          ))}
        </StyledUsersList>
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

const StyledUsersList = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 90%;
  max-width: 50rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default UsersList;
