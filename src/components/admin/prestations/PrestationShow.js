import { ShowGuesser, FieldGuesser } from "@api-platform/admin";
import { ReferenceField, DateField, TabbedShowLayout, Tab, RichTextField, ReferenceArrayField, SingleFieldList, ImageField } from "react-admin";
import PriceField from "./PriceField";
// import { Card, CardContent } from '@mui/material';


const PrestationShow = props => (
  <ShowGuesser  {...props}>
    <TabbedShowLayout>
      <Tab label="summary">
        <FieldGuesser addLabel={true} source={"title"} />
        <FieldGuesser addLabel={true} source={"slug"} />
        <PriceField addLabel={true} source={"price"} />
        <FieldGuesser source={"duration"} addLabel={true} />
        <ReferenceField label={"Category"} reference={"categories"} source={"category"}>
          <FieldGuesser source={"title"} />
        </ReferenceField>
        <FieldGuesser source="exerpt" fullWidth={true} />

        <DateField source="createdAt" showTime={true} />
        <DateField source="updatedAt" showTime={true} />
      </Tab>
      <Tab label="Content" path="content">
        <RichTextField source="content" addLabel={false} />
      </Tab>
      <Tab label="Images" path="images">
        <ReferenceArrayField reference="images" source="images" label="">
          <SingleFieldList>

            <>
              <ImageField addLabel={false} source="imageUrl" sx={{ '& .RaImageField-image': { width: 200, height: 200, margin: '30px' } }} />
            </>

          </SingleFieldList>
        </ReferenceArrayField>
      </Tab>

    </TabbedShowLayout>

  </ShowGuesser>

);

export default PrestationShow;