import { CreateGuesser, InputGuesser } from "@api-platform/admin";
import { RichTextInput } from 'ra-input-rich-text';

const TestimonialCreate = props => {
  return (
    <CreateGuesser {...props}>
      <InputGuesser source={"author"} />
      <InputGuesser source={"title"} />
      <RichTextInput source={"content"} />
    </CreateGuesser>
  )
};

export default TestimonialCreate; 