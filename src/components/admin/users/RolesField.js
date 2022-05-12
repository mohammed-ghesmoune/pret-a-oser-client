import { ArrayField, SingleFieldList, ChipField, useRecordContext } from 'react-admin';

const RolesField = (props) => {
  let record = useRecordContext(props)
  record = { ...record, roles: record.roles.map((v, i) => ({ id: i, role: v })) }
  console.log(record.roles)
  return (
    <ArrayField record={record} source="roles" >
      <SingleFieldList >
        <ChipField source="role" />
      </SingleFieldList>
    </ArrayField>
  )
};
export default RolesField;