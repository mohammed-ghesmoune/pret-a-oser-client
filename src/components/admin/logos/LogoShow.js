import {
  ShowGuesser, FieldGuesser
} from "@api-platform/admin";
import { ImageField, DateField, TopToolbar, ListButton, UrlField } from "react-admin";


const ImageShowActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="List Logos" />
  </TopToolbar>
);
const LogoShow = props => (
  <ShowGuesser {...props}
    actions={<ImageShowActions />}
  >
    <FieldGuesser source="title" addLabel={true} />
    <UrlField source={"url"} />
    <ImageField source="imageUrl" label={"Image"} sx={{ '& .RaImageField-image': { width: 100, height: 100 } }} />
    <DateField source="createdAt" showTime={true} />
    <DateField source="updatedAt" showTime={true} />

  </ShowGuesser>
);

export default LogoShow;