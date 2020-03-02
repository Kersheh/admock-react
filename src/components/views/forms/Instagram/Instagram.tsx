import React from 'react';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import './Instagram.scss';

import { InDevelopment } from 'src/components/temp/InDevelopment';

const Instagram: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="instagram">
      <div className="instagram-container">
        <Box className="instagram__header" display="flex" justifyContent="space-between" alignItems="center">
          <div className="instagram__header-text">{t('VIEW_TITLE_INSTAGRAM')}</div>
        </Box>

        <InDevelopment/>
      </div>
    </div>
  );
};

export default Instagram;
