import * as React from 'react';
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import {
  ImageField, DeleteButton, ChipField, ReferenceField
} from 'react-admin';

const ImageList = (props) => (

  <ListGuesser {...props} >
    <FieldGuesser source={"title"} />
    <ImageField source={"imageUrl"} label={"Images"} sx={{ '& .RaImageField-image': { width: 100, height: 100 } }} />
    <ReferenceField label="Prestation" source="prestation" reference="prestations">
      <ChipField source="title" />
    </ReferenceField>
    <DeleteButton />
  </ListGuesser>
);

export default ImageList;