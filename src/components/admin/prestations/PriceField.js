import * as React from "react";
import PropTypes from 'prop-types';
import { useRecordContext, NumberField } from 'react-admin';

const PriceField = (props) => {
  const { source } = props;
  let record = useRecordContext(props);
  record = {
    ...record, [source]: record[source] / 100
  }
  return <NumberField source={source} record={record} options={{ style: 'currency', currency: 'EUR' }} />

}

PriceField.propTypes = {
  label: PropTypes.string,
  record: PropTypes.object,
  source: PropTypes.string.isRequired,
};

export default PriceField;