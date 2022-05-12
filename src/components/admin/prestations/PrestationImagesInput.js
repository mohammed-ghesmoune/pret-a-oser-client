
import {
  ImageInput,
  ArrayInput, SimpleFormIterator, ImageField, TextField, DeleteButton, TextInput,
  ReferenceManyField, Datagrid
} from 'react-admin';


const PrestationImagesInput = (props) => {

  return (
    <>
      <ReferenceManyField reference="images" target="prestation" >
        <Datagrid>
          <TextField source="title" />
          <ImageField source="imageUrl" sx={{ '& .RaImageField-image': { width: 100, height: 100, margin: '30px' } }} />
          <DeleteButton redirect={false} />
        </Datagrid>
      </ReferenceManyField>

      <ArrayInput source="images">
        <SimpleFormIterator>
          <TextInput source={"title"} label='Image title' />
          <ImageInput source="imageFile" label="Related pictures" accept="image/*" defaultValue={""}>
            <ImageField source="imageUrl" title="title" sx={{ '& .RaImageField-image': { width: 200, height: 200, margin: '30px' } }} />
          </ImageInput>
        </SimpleFormIterator>
      </ArrayInput>
    </>
  );
};

export default PrestationImagesInput;