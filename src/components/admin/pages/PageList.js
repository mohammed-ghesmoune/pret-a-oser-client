import * as React from 'react';
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import {
  ImageField, DeleteButton,
} from 'react-admin';

const PageList = (props) => (

  <ListGuesser {...props} >
    <FieldGuesser source={"title"} />
    <ImageField source={"imageUrl"} sx={{ '& .RaImageField-image': { width: 100, height: 100 } }} />
    <DeleteButton />
  </ListGuesser>
);

export default PageList;