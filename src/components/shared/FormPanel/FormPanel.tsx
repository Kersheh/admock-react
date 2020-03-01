import React, { ReactNode } from 'react';

import './FormPanel.scss';

type AdPreviewProps = {
  children?: ReactNode;
}

const FormPanel: React.FC<AdPreviewProps> = ({ children }: AdPreviewProps) => {
  return (
    <div className="form-panel">
      {children}
    </div>
  );
};

export default FormPanel;
