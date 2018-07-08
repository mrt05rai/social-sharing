import PropTypes from 'prop-types';
import React from 'react';

const Button = (props) => {
  const {
    label, className, type, onClick,
  } = props;
  return (
    <button
      type={type || 'button'}
      className={className}
      onClick={
        onClick ? () => onClick() : () => console.log('button clicked')
      }
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
