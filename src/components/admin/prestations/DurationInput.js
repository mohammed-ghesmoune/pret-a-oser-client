import { NumberInput } from 'react-admin';

const DurationInput = (props) => {

  return (

    <span>
      <NumberInput source="hours" label="hours" min={0} />
      :
      <NumberInput source="minutes" label="minutes" min={0} max={45} step={15} />
    </span>

  )
};

DurationInput.defaultProps = {
  label: 'Duration',
  addLabel: true,
};
export default DurationInput;