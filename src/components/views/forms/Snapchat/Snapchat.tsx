import React from 'react';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import './Snapchat.scss';

import { InDevelopment } from 'src/components/temp/InDevelopment';

const Snapchat: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="snapchat">
      <div className="snapchat-container">
        <Box className="snapchat__header" display="flex" justifyContent="space-between" alignItems="center">
          <div className="snapchat__header-text">{t('VIEW_TITLE_SNAPCHAT')}</div>
        </Box>

        <InDevelopment/>
      </div>
    </div>
  );
};

export default Snapchat;
