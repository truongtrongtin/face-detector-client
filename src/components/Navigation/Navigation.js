import React from 'react';

const Navigation = ({isSignedIn, onRouteChange}) => {
  if(isSignedIn) {
    return(
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pointer pa3 ma0'>Sign out</p>
      </nav>
    );
  } else {
    return(
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pointer pa3 ma0'>Sign in</p>
        <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pointer pa3 ma0'>Register</p>
      </nav>
    );
  }
};

export default Navigation;