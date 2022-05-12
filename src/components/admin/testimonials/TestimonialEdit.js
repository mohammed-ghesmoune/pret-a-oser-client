import { EditGuesser, InputGuesser } from "@api-platform/admin";
import { RichTextInput } from 'ra-input-rich-text';

const TestimonialEdit = props => {
  return (
    <EditGuesser {...props}>
      <InputGuesser source={"title"} />
      <RichTextInput source={"content"} />
      <InputGuesser source={"author"} />
    </EditGuesser>
  )
};

export default TestimonialEdit; 