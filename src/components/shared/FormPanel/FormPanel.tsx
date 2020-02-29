import React, { ReactNode } from 'react';

import './FormPanel.scss';

const FormPanel: React.FC<ReactNode> = ({ children }) => {
  return (
    <div className="form-panel">
      {children}
    </div>
  );
};

export default FormPanel;
