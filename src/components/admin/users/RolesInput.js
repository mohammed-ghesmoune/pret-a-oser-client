import { SelectArrayInput } from 'react-admin';

const RolesInput = (props) => {
  let roles = ['ROLE_USER', 'ROLE_ADMIN']
  let choices = roles.map((role, id) => ({ id, role }))
  console.log(choices)
  return (
    <SelectArrayInput source="roles" choices={choices} optionText="role" optionValue="role" multiple />
  )
};
export default RolesInput;