import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
  return(
    <div>
      <p className='f3'>
        {'This Magic App will detect faces in your pictures. Give it a try!'}
      </p>
      <div className='center'>
        <div className='center form pa4 br3 shadow-5'>
          <input className='f4 pa2 w-70' onChange= {onInputChange} type="text" placeholder='Put your image link here'/>
          <button
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer'
            onClick={onPictureSubmit}
          >
          Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;