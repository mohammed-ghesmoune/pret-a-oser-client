
import {
  CreateGuesser, InputGuesser
} from "@api-platform/admin";
import { ImageField, ImageInput, } from "react-admin";

const PageCreate = props => {

  return (
    <CreateGuesser {...props}>
      <InputGuesser source="title" label={"Titre de la page"} />
      <InputGuesser source="content" label={"contenu de la page"} />
      <ImageInput source="imageFile" label={""} accept="image/*">
        <ImageField source="imageUrl" title="title" sx={{ '& .RaImageField-image': { width: 200, height: 200 } }} />
      </ImageInput>
    </CreateGuesser >
  )
};

export default PageCreate;