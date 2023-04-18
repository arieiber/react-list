import React from 'react';
import './CustomButton.css';
import PropTypes from 'prop-types';

    // Component logic of basic functionality of a reusable button component
    const CustomButton = ({ onClick, children, className, disabled }) => {
        return (
          <button
            className={`custom-button ${className}`}
            onClick={onClick}
            disabled={disabled}
          >
            {children}
          </button>
        );
      };
      
  
  export default CustomButton;
  
