
import {
  InputGuesser, EditGuesser
} from "@api-platform/admin";
import { ImageField, FileInput, } from "react-admin";
import { RichTextInput, } from 'ra-input-rich-text';

const PageEdit = props => {

  return (
    <EditGuesser {...props} >
      <InputGuesser source="title" label={"Titre de la page"} />
      <RichTextInput source="content" addLabel={true} label={"Contenu de la page"} fullWidth />
      <ImageField source="imageUrl" title="title" sx={{ '& .RaImageField-image': { width: 200, height: 200 } }} />
      <FileInput source="imageFile" label={""} accept="image/*" defaultValue={""}>
        <ImageField source="imageUrl" title="title" sx={{ '& .RaImageField-image': { width: 200, height: 200 } }} />
      </FileInput>
    </EditGuesser >
  )
};

export default PageEdit;