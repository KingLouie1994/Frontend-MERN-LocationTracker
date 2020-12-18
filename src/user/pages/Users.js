// Import Components
import UsersList from "../components/UsersList";

const Users = () => {
  const DATA = [
    { id: "u1", name: "Luis", img: "placeholder", places: 3 },
    { id: "u2", name: "Max", img: "placeholder", places: 7 },
    { id: "u3", name: "Thomas", img: "placeholder", places: 4 },
  ];

  return <UsersList items={DATA} />;
};

export default Users;
