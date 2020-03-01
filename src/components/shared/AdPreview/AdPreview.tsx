import React, { ReactNode } from 'react';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import './AdPreview.scss';

type AdPreviewProps = {
  children?: ReactNode;
}

const AdPreview: React.FC<AdPreviewProps> = ({ children }: AdPreviewProps) => {
  const { t } = useTranslation();

  return (
    <div className="ad-preview">
      <div className="ad-preview-container">
        <h1 className="alt ad-preview__header">{t('AD_RENDER_PANEL_TITLE')}</h1>
        <Box display="flex" justifyContent="center">
          {children}
        </Box>
      </div>
    </div>
  );
};

export default AdPreview;
