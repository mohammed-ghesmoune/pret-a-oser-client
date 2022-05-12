import { FieldGuesser, ListGuesser } from "@api-platform/admin";
import { ReferenceArrayField, ChipField, SingleFieldList, DeleteButton, } from 'react-admin'
const CategoryList = props => (
  <ListGuesser {...props}>
    <FieldGuesser source={"title"} />
    <FieldGuesser source={"slug"} />
    <ReferenceArrayField
      label="Prestations"
      reference="prestations"
      source="prestations"
    >
      <SingleFieldList>
        <ChipField source={"title"} />
      </SingleFieldList>
    </ReferenceArrayField>

    <DeleteButton />
  </ListGuesser>
);

export default CategoryList;