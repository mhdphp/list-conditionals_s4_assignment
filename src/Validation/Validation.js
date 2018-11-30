import React from 'react';

const textValidation = (props) => {
  let validationStyle = {
    color: 'blue',
    fontWeight: '800'
  }
  
  return (
      <p style={validationStyle}>{props.message}</p>
  )
}

export default textValidation;