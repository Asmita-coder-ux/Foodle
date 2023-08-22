import React from 'react';

const Delete = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
     <i className="fa-regular fa-trash-plus"></i>
      {/* For example, using an X icon */}
      <span aria-hidden="true">&times;</span>
      {/* <span className="visually-hidden">Delete</span> */}
    </button>
  );
};

export default Delete;
