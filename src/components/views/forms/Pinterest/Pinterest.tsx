import React from 'react';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import './Pinterest.scss';

import { InDevelopment } from 'src/components/temp/InDevelopment';

const Pinterest: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="pinterest">
      <div className="pinterest-container">
        <Box className="pinterest__header" display="flex" justifyContent="space-between" alignItems="center">
          <div className="pinterest__header-text">{t('VIEW_TITLE_PINTEREST')}</div>
        </Box>

        <InDevelopment/>
      </div>
    </div>
  );
};

export default Pinterest;
