import { EditGuesser, InputGuesser } from "@api-platform/admin";
import { TopToolbar, ListButton, ShowButton, } from 'react-admin';
// import ChevronLeft from '@material-ui/icons/ChevronLeft';
// import { Typography, Card, CardContent } from '@material-ui/core'

const CategoryEditActions = ({ basePath, data }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="List Categories" />
    <ShowButton basePath={basePath} record={data} />
  </TopToolbar>
);

const CategoryTitle = ({ record, prefix }) => {
  return <span>{prefix} {record ? `"${record.id} "` : ''}</span>;
};

const CategoryEdit = props => (
  <EditGuesser
    title={<CategoryTitle prefix="Edit category" />}
    actions={<CategoryEditActions />}
    {...props}>
    <InputGuesser resettable source={"title"} />
    <InputGuesser multiline resettable fullWidth source={"description"} />
  </EditGuesser>
);

export default CategoryEdit;