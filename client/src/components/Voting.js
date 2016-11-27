import React from 'react';

const Voting = (props) => {
  let pair = props.pair || [];
  return (
    <div className='voting'>
      { pair.map((entry, i) => (
        <button key={ i }>
          <h1>{ entry }</h1>
        </button>
      ))}
    </div>
  )
}

export default Voting
