import React from 'react';

const Rank = ({name, entries}) => {
  return(
    <div>
      <div className='white mt3'>
        {`${name}, you have detected ${entries} picture(s)`}
      </div>
    </div>
  );
};

export default Rank;