import React from 'react';

const char = (props) => {
  const charStyle = {
    display: 'inline-block',
    color: 'black',
    fontWeight: '600',
    padding: '10px',
    margin: '10px',
    border: '1px solid #fff',
    textAlign: 'center',
    backgroundColor: '#ccc'
  }

  return (
    <div style={charStyle} onClick={props.clicked}>
      {props.character}
    </div>
  );
}

export default char;