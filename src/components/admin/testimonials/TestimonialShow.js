import { ShowGuesser, FieldGuesser } from "@api-platform/admin";
import { RichTextField, DateField, required } from 'react-admin';

const validateContent = required();
const TestimonialShow = props => {
  return (
    <ShowGuesser {...props}>
      <FieldGuesser source={"title"} addLabel={true} />
      <RichTextField source={"content"} validate={validateContent} />
      <FieldGuesser source={"author"} addLabel={true} />
      <DateField source={"createdAt"} addLabel={true} showTime={true} locales="fr-FR" />
      <DateField source={"updatedAt"} addLabel={true} showTime={true} locales="fr-FR" />
    </ShowGuesser>
  )
};

export default TestimonialShow; 