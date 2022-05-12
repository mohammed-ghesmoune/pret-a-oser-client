import { CreateGuesser, InputGuesser } from "@api-platform/admin";
import { TopToolbar, ListButton, } from 'react-admin';

const CategoryCreateActions = ({ basePath }) => (
  <TopToolbar>
    <ListButton basePath={basePath} label="List Categories" />
  </TopToolbar>
);


const CategoryCreate = props => (
  <CreateGuesser
    actions={<CategoryCreateActions />}
    {...props}>
    <InputGuesser resettable source={"title"} />
    <InputGuesser multiline resettable fullWidth source={"description"} />
  </CreateGuesser>
);

export default CategoryCreate;