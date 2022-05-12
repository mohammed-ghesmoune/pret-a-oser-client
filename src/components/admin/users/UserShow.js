import { ShowGuesser, FieldGuesser } from "@api-platform/admin";
import RolesField from "./RolesField";

const UserShow = props => {
  return (
    <ShowGuesser {...props}>
      <FieldGuesser source={"username"} addLabel={true} />
      <FieldGuesser source={"email"} addLabel={true} />
      < RolesField source="roles" />
    </ShowGuesser>
  )
};

export default UserShow; 