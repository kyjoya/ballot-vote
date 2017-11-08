import React from 'react'

const CandidateTile = props => {
  return (
    <h4 className="candidate-name" onClick={props.clickHandler}>
      {props.name}
    </h4>
  )
}

export default CandidateTile;
