import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imageUrl, box}) => {
  return(
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='input-image' alt='' src={imageUrl} max-width='1200px' height='auto'/>
        {
          box.map((item, i) => {
            return(<div
              key={i}
              className='bounding-box'
              style={{top: item.topRow, right: item.rightCol, bottom: item.bottomRow, left: item.leftCol}}>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default FaceRecognition;