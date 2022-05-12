
import {
  CreateGuesser, InputGuesser
} from "@api-platform/admin";
import { ImageField, ImageInput, } from "react-admin";



const LogoCreate = props => {

  return (
    <CreateGuesser {...props}>
      <InputGuesser source="title" label={"Titre du Logo"} />
      <InputGuesser source="url" label={"Lien du partenaire"} />
      <ImageInput source="imageFile" label={""} accept="image/*">
        <ImageField source="imageUrl" title="title" sx={{ '& .RaImageField-image': { width: 200, height: 200 } }} />
      </ImageInput>
    </CreateGuesser >
  )
};

export default LogoCreate;