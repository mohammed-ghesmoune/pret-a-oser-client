
import {
  CreateGuesser, InputGuesser
} from "@api-platform/admin";
import { ImageField, ImageInput, AutocompleteInput, ReferenceInput } from "react-admin";



const ImageCreate = props => {


  return (
    <CreateGuesser {...props} >
      <InputGuesser source="title" label={"Titre de l'image"} />
      <ReferenceInput
        source="prestation"
        reference="prestations"
        label="Prestation"
        filterToQuery={searchText => ({ title: searchText })}
      >
        <AutocompleteInput optionText="title" />
      </ReferenceInput>
      <ImageInput source="imageFile" label={""} accept="image/*">
        <ImageField source="imageUrl" title="title" sx={{ '& .RaImageField-image': { width: 200, height: 200 } }} />
      </ImageInput>
    </CreateGuesser >
  )
};

export default ImageCreate;