import PropTypes from 'prop-types';
import React from 'react';
import Input from './InputComponent';

const FormInput = (props) => {
  const {
    wrapClass, labelClass, inputClass, label, type, holder, value, onChange,
  } = props;
  return (
    <div className={wrapClass}>
      <label className={labelClass}>{label}</label>
      <Input
        type={type}
        className={inputClass}
        placeholder={holder}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

FormInput.propTypes = {
  wrapClass: PropTypes.string,
  labelClass: PropTypes.string,
  inputClass: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  holder: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormInput;
