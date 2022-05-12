
import { ShowGuesser, FieldGuesser } from "@api-platform/admin";
import { ReferenceArrayField, SingleFieldList, ChipField, DateField } from 'react-admin'


const CategoryShow = props => (
  <ShowGuesser
    {...props}>
    <FieldGuesser source={"title"} addLabel={true} />
    <FieldGuesser source={"slug"} addLabel={true} />
    <FieldGuesser multiline source={"description"} addLabel={true} />
    <ReferenceArrayField
      label="Prestations"
      reference="prestations"
      source="prestations"
    >
      <SingleFieldList>
        <ChipField source={"title"} />
      </SingleFieldList>
    </ReferenceArrayField>
    <DateField source={"createdAt"} addLabel={true} showTime={true} />
    <DateField source={"updatedAt"} addLabel={true} showTime={true} />

  </ShowGuesser>
);

export default CategoryShow;