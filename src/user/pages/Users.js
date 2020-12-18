// Import Components
import UsersList from "../components/UsersList";

const Users = () => {
  const DATA = [
    {
      id: "u1",
      name: "Luis Schekerka",
      image:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      places: 3,
    },
  ];

  return <UsersList users={DATA} />;
};

export default Users;
