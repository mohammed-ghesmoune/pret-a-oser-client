import { CreateGuesser, InputGuesser } from "@api-platform/admin";
import { PasswordInput, TextInput, Create, SimpleForm } from "react-admin"
import RolesInput from "./RolesInput";
const UserCreate = props => {
  const transform = record => {
    console.log(record)
    return record
  }
  return (
    <Create {...props} transform={transform}>
      <SimpleForm >
        <InputGuesser source={"username"} />
        <InputGuesser source={"email"} />
        <PasswordInput source={"password"} />
        <RolesInput source={"roles"} />
      </SimpleForm>
    </Create>
  )
};

export default UserCreate; 