import React from 'react';

const Result = ({ imgResult }) => {
  return (
    <div>
      <div className='white f3 pa4'>
        {'the result of prediction is...'}
      </div>
      <div className='white f1'>
        {imgResult} 
      </div>
    </div>
  );
}

export default Result;