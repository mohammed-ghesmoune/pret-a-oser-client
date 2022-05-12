import * as React from "react";
import PropTypes from 'prop-types';
import { useRecordContext } from 'react-admin';

const DurationField = (props) => {
  const { source } = props;
  const record = useRecordContext(props);
  const duration = record[source].toString().split('.');
  const hours = +duration[0] > 0 ? duration[0] + ' h' : '';
  const minutes = +duration[1] > 0 ? duration[1] + ' mn' : '';
  return <span>{`${hours} ${minutes}`}</span>;
}

DurationField.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
};

export default DurationField;