import React from 'react';

const Button = ({ text, link, onClick }) => {
  if (link) {
    return (
      <a href={link} className="custom-button">
        {text}
      </a>
    );
  }
  
  return (
    <button className="custom-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;