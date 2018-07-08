import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const LinkComponent = (props) => {
  const {
    href, className, onClick, children, dataToggle,
  } = props;
  return (
    <Link
      to={href || '#'}
      className={className}
      data-toggle={dataToggle}
      onClick={
        onClick ? () => onClick() : () => console.log('link clicked')
      }
    >
      {children}
    </Link>
  );
};

LinkComponent.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default LinkComponent;
