import PropTypes from 'prop-types';
import React from 'react';

const InputComponent = (props) => {
  const {
    type, className, placeholder, value, id, onChange,
  } = props;
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      value={value}
      id={id}
      onChange={
        onChange ? e => onChange(e.target.value) : () => console.log('input changed')
      }
    />
  );
};

InputComponent.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputComponent;
