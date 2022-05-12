import * as React from 'react';
import { ListGuesser, FieldGuesser } from '@api-platform/admin'
import {
  ImageField, DeleteButton, UrlField
} from 'react-admin';

const LogoList = (props) => (

  <ListGuesser {...props} >
    <FieldGuesser source={"title"} />
    <UrlField source={"url"} />
    <ImageField source={"imageUrl"} label={"Images"} sx={{ '& .RaImageField-image': { width: 100, height: 100 } }} />
    <DeleteButton />
  </ListGuesser>
);

export default LogoList;