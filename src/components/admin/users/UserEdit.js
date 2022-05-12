import { EditGuesser, InputGuesser } from "@api-platform/admin";
import { PasswordInput } from "react-admin"
import RolesInput from "./RolesInput";

const UserEdit = props => {
  return (
    <EditGuesser {...props}>
      <InputGuesser source={"username"} />
      <InputGuesser source={"email"} />
      <PasswordInput source={"password"} inputProps={{ autoComplete: 'current-password' }} />
      <RolesInput source={"roles"} />
    </EditGuesser>
  )
};

export default UserEdit; 