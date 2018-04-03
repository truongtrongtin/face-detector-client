import React from 'react';
import Tilt from 'react-tilt';
import face from './face.png';

const Logo = () => {
  return(
    <div>
      <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 100, width: 100, margin: 'auto' }} >
        <div className="Tilt-inner"><img src={face} alt="logo"/></div>
      </Tilt>
    </div>
  );
};

export default Logo;