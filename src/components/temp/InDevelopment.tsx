import React from 'react';

export const InDevelopment: React.FC = () => {
  return (
    <>
      <img style={{position: 'relative', top: '126px', left: 'calc(50% - 25px)'}} src="/assets/misc/construction-50.png"/>
      <span style={{fontWeight: 700, position: 'relative', top: '150px', left: 'calc(50% - 96px)'}}>In Development</span>
    </>
  );
};
