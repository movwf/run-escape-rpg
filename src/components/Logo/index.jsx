import React from 'react';

function Logo() {
  return <img style={{ height: '150px' }} src="/logo.png" alt="logo" />;
}

export default React.memo(Logo);
