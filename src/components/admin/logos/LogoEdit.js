
import {
  InputGuesser, EditGuesser
} from "@api-platform/admin";
import { ImageField, FileInput } from "react-admin";
// import EditImageInput from './EditImageInput'

const LogoEdit = props => {

  return (
    <EditGuesser {...props} >
      <InputGuesser source="title" label={"Titre du Logo"} />
      <InputGuesser source="url" label={"Lien du partenaire"} />
      {/* <EditImageInput source="imageFile" ></EditImageInput> */}
      <FileInput source="imageFile" label={""} accept="image/*" defaultValue={''} >
        <ImageField source="imageUrl" title="title" />
      </FileInput>
    </EditGuesser >
  )
};

export default LogoEdit;