import { FieldGuesser } from "@api-platform/admin";
import { TextField, DateField, Show, TabbedShowLayout, Tab, RichTextField, ImageField } from "react-admin";


const PageShow = props => (
  <Show  {...props}>
    <TabbedShowLayout>
      <Tab label="summary">
        <FieldGuesser addLabel={true} source={"title"} />
        <FieldGuesser addLabel={true} source={"slug"} />
        <DateField source="createdAt" showTime={true} />
        <DateField source="updatedAt" showTime={true} />
      </Tab>
      <Tab label="Content" path="content">
        <RichTextField source="content" addLabel={false} />
      </Tab>
      <Tab label="Image" path="imageUrl">
        <TextField addLabel={false} source="title" />
        <ImageField addLabel={false} source="imageUrl" label={"Image"} sx={{ '& .RaImageField-image': { width: 300, height: 300 } }} />
      </Tab>
    </TabbedShowLayout>
  </Show>

);

export default PageShow;