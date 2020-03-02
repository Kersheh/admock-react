import React from 'react';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import './Tiktok.scss';

import { InDevelopment } from 'src/components/temp/InDevelopment';

const Tiktok: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="tiktok">
      <div className="tiktok-container">
        <Box className="tiktok__header" display="flex" justifyContent="space-between" alignItems="center">
          <div className="tiktok__header-text">{t('VIEW_TITLE_TIKTOK')}</div>
        </Box>

        <InDevelopment/>
      </div>
    </div>
  );
};

export default Tiktok;
