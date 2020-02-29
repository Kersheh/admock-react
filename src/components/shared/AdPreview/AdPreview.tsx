import React, { ReactNode } from 'react';

import './AdPreview.scss';

const AdPreview: React.FC<ReactNode> = ({ children }) => {
  return (
    <div className="ad-preview">
      {children}
    </div>
  );
};

export default AdPreview;
