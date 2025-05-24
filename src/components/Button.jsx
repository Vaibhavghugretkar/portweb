import React from 'react';

const Button = ({ text, link, onClick }) => {
  if (link) {
    return (
      <>
        <a href={link} className="custom-button" target="_blank" rel="noopener noreferrer">
          {text}
        </a>
        <style jsx>{`
          .custom-button {
            display: inline-block;
            background-color: rgba(34, 197, 94, 0.2); /* translucent green */
            color: #22c55e;
            padding: 0.75rem 1.5rem;
            font-weight: 600;
            border: 2px solid #22c55e;
            border-radius: 0.5rem;
            text-decoration: none;
            transition: all 0.3s ease;
            backdrop-filter: blur(6px);
          }

          .custom-button:hover {
            background-color: rgba(34, 197, 94, 0.4);
            color: #ffffff;
            box-shadow: 0 0 10px #22c55e;
            border-color: #22c55e;
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <button className="custom-button" onClick={onClick}>
        {text}
      </button>
      <style jsx>{`
        .custom-button {
          display: inline-block;
          background-color: rgba(34, 197, 94, 0.2); /* translucent green */
          color: #22c55e;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          border: 2px solid #22c55e;
          border-radius: 0.5rem;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          backdrop-filter: blur(6px);
        }

        .custom-button:hover {
          background-color: rgba(34, 197, 94, 0.4);
          color: #ffffff;
          box-shadow: 0 0 10px #22c55e;
          border-color: #22c55e;
        }
      `}</style>
    </>
  );
};

export default Button;
