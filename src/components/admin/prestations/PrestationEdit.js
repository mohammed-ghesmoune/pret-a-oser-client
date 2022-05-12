import { InputGuesser } from "@api-platform/admin";
import {
  useDataProvider, useNotify, useRedirect, TabbedForm, Edit,
  FormTab, ReferenceInput, SelectInput, useEditContext,
} from "react-admin";
import { RichTextInput } from 'ra-input-rich-text';
import DurationInput from "./DurationInput";
import prestationTransform from "./prestationTransform";
import PrestationImagesInput from "./PrestationImagesInput";

const PrestationTabbedForm = props => {
  let { record } = useEditContext(props)
  if (record && record.images) {
    record = {
      ...record,
      prevImages: record.images,
      images: []
    }
  }
  if (record && record.duration) {
    const prestation = record.duration.split(':')
    record = {
      ...record,
      hours: parseInt(prestation[0]),
      minutes: parseInt(prestation[1])
    }
  }
  return <TabbedForm {...props} record={record}></TabbedForm>
}
const PrestationEdit = props => {
  const notify = useNotify();
  const redirect = useRedirect();
  const dataProvider = useDataProvider();
  const transform = (record) => {
    return prestationTransform(record, dataProvider, notify, redirect)
  }
  return (
    <Edit  {...props} transform={transform} >
      <PrestationTabbedForm margin="normal">
        <FormTab label="summary">
          <InputGuesser source="title" />
          <InputGuesser source="price" parse={v => v * 100} format={v => v / 100} />
          <DurationInput source="duration" />
          <ReferenceInput source="category" reference="categories">
            <SelectInput optionText="title" />
          </ReferenceInput>
          <InputGuesser source="exerpt" fullWidth={true} />
        </FormTab>
        <FormTab label="Content" >
          <RichTextInput source="content" addLabel={false} label='' />
        </FormTab>
        <FormTab label="Images" >
          <PrestationImagesInput source="images"></PrestationImagesInput>
        </FormTab>
      </PrestationTabbedForm>
    </Edit>

  )
};

export default PrestationEdit;

// const PrestationEditToolbar = props => (
//   <Toolbar {...props}>
//     <SaveButton
//       label="Saveee"
//       transform={(data, { previousData }) => {

//         console.log(data);
//         console.log(previousData);
//         debugger
//         return data;
//       }}
//       type="button"
//     />
//   </Toolbar>
// );