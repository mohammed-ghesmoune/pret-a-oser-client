import {
  ShowGuesser, FieldGuesser
} from "@api-platform/admin";
import { ImageField, ReferenceField, ChipField, DateField, TopToolbar, ListButton, } from "react-admin";
// const cardStyle = { width: 'fit-content', margin: 'auto' };
// const textFieldStyle = { textAlign: 'center', fontWeight: 'bold', display: 'block' };

const ImageShowActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="List Images" />
  </TopToolbar>
);
const ImageShow = props => (
  <ShowGuesser {...props}
    actions={<ImageShowActions />}
  >
    <FieldGuesser source="title" addLabel={true} />
    <ImageField source="imageUrl" label={"Image"} sx={{ '& .RaImageField-image': { width: 300, height: 300 } }} />
    <DateField source="createdAt" showTime={true} />
    <DateField source="updatedAt" showTime={true} />
    <ReferenceField source="prestation" reference="prestations" target="prestation">
      <ChipField source="title" />
    </ReferenceField>

  </ShowGuesser>
);

export default ImageShow;