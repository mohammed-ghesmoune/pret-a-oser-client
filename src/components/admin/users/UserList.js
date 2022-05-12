import { ListGuesser, FieldGuesser } from "@api-platform/admin";
import { DeleteButton, EmailField, } from 'react-admin';
import RolesField from "./RolesField";
const UserList = props => {
  return (
    <ListGuesser {...props}>
      <FieldGuesser source={"username"} />
      <EmailField source={"email"} />
      < RolesField source="roles" />
      <DeleteButton />
    </ListGuesser>
  )
};

export default UserList; 