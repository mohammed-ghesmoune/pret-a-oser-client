import { ListGuesser, FieldGuesser } from "@api-platform/admin";
import { DeleteButton } from 'react-admin';

const TestimonialList = props => {
  return (
    <ListGuesser {...props}>
      <FieldGuesser source={"title"} />
      {/* <FieldGuesser source={"content"} /> */}
      <FieldGuesser source={"author"} />
      <DeleteButton />
    </ListGuesser>
  )
};

export default TestimonialList; 