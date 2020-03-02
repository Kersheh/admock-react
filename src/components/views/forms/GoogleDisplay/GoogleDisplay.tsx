import React from 'react';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import './GoogleDisplay.scss';

import { InDevelopment } from 'src/components/temp/InDevelopment';

const GoogleDisplay: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="google-display">
      <div className="google-display-container">
        <Box className="google-display__header" display="flex" justifyContent="space-between" alignItems="center">
          <div className="google-display__header-text">{t('VIEW_TITLE_GOOGLE_DISPLAY')}</div>
        </Box>

        <InDevelopment/>
      </div>
    </div>
  );
};

export default GoogleDisplay;
