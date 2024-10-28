import React from 'react';

function Star() {
  return (
    <>
      <svg
        className="star-icon"
        viewBox="0 0 18 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.99875 0.125L6.43937 5.31125L0.71875 6.13812L4.85875 10.1769L3.88 15.875L8.99875 13.1862L14.1175 15.875L13.1387 10.1769L17.2787 6.14375L11.5581 5.31125L8.99875 0.125Z" />
      </svg>
      <style jsx>
        {`
          .star-icon {
            width: 17px;
            height: 16px;
            fill: currentColor;
          }
        `}
      </style>
    </>
  );
}

export default Star;
