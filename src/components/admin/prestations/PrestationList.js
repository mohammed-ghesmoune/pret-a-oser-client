import { ListGuesser, FieldGuesser } from "@api-platform/admin";
import { ReferenceField, TextField, ImageField, ReferenceManyField, SingleFieldList } from 'react-admin';
import PriceField from "./PriceField";
const PrestationList = props => {
  return (
    <ListGuesser {...props}>
      <FieldGuesser source={"title"} />
      <ReferenceManyField reference="images" target="prestation" >
        <SingleFieldList>
          <ImageField source="imageUrl" sx={{ '& .RaImageField-image': { width: 50, height: 50, margin: '30px' } }} />
        </SingleFieldList>
      </ReferenceManyField>
      <PriceField source={"price"} />
      <FieldGuesser source={"duration"} />
      <ReferenceField label="Category" source="category" reference="categories">
        <TextField source="title" />
      </ReferenceField>
    </ListGuesser>
  )
};

export default PrestationList; 