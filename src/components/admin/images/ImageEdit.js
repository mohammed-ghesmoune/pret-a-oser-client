
import {
  InputGuesser, EditGuesser
} from "@api-platform/admin";
import { ImageField, FileInput, ReferenceInput, AutocompleteInput } from "react-admin";

const ImageEdit = props => {
  const transformData = data => {
    console.log(data)
    debugger
  }
  return (
    <EditGuesser {...props} redirect={"show"} transform={transformData}>
      <InputGuesser source="title" label={"Titre de l'image"} />
      <ReferenceInput
        source="prestation"
        reference="prestations"
        label="Prestation"
        filterToQuery={searchText => ({ title: searchText })}
      >
        <AutocompleteInput optionText="title" />
      </ReferenceInput>
      <ImageField source="imageUrl" label="Image" title="title" sx={{ '& .RaImageField-image': { width: 200, height: 200 } }} />

      <FileInput source="imageFile" label={""} accept="image/*" defaultValue={""} >
        <ImageField source="imageUrl" title="title" sx={{ '& .RaImageField-image': { width: 200, height: 200 } }} />
      </FileInput>
    </EditGuesser >
  )
};

export default ImageEdit;