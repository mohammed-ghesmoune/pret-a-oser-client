import { InputGuesser, } from "@api-platform/admin";
import {
  useDataProvider, useNotify, useRedirect, TabbedForm, Create, FormTab, ReferenceInput,
  ArrayInput, SimpleFormIterator, ImageInput, ImageField,
  AutocompleteInput, TextInput
} from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';
import DurationInput from "./DurationInput";
import prestationTransform from "./prestationTransform";


const PrestationCreate = props => {
  const notify = useNotify();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();
  const transform = (record) => {
    return prestationTransform(record, dataProvider, notify, redirect)
  }
  return (
    <Create  {...props} transform={transform} >
      <TabbedForm margin="normal">
        <FormTab label="summary">
          <InputGuesser source="title" />
          <InputGuesser source="price" defaultValue={0} parse={v => v * 100} format={v => v / 100} />
          <DurationInput source="duration" />
          <ReferenceInput
            source="category"
            reference="categories"
            label="Category"
            filterToQuery={searchText => ({ title: searchText })}
          >
            <AutocompleteInput optionText="title" />
          </ReferenceInput>
          <InputGuesser source="exerpt" fullWidth={true} />

        </FormTab>
        <FormTab label="Content" >
          <RichTextInput source="content" addLabel={false} label='' />
        </FormTab>
        <FormTab label="Images" >
          <ArrayInput source="images">
            <SimpleFormIterator>
              <TextInput source={"title"} label='Image title' sx={{ '& .RaImageField-image': { width: 100, height: 100 } }} />
              <ImageInput source="imageFile" label="Related pictures" accept="image/*" defaultValue={""}>
                <ImageField source="imageUrl" title="title" sx={{ '& .RaImageField-image': { width: 300, height: 300 } }} />
              </ImageInput>
            </SimpleFormIterator>
          </ArrayInput>
        </FormTab>
      </TabbedForm>
    </Create>

  )
};

export default PrestationCreate;

