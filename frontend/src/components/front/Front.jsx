import React from 'react';
import image from './bapan.jpg'; // relative path

const Front = () => {
  return (
    <div>
      <h1>Welcome to the Front Page</h1>
      <img src={image} alt="Front Banner" />
    </div>
  );
};

export default Front;