import React from 'react';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import './Twitter.scss';

import { InDevelopment } from 'src/components/temp/InDevelopment';

const Twitter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="twitter">
      <div className="twitter-container">
        <Box className="twitter__header" display="flex" justifyContent="space-between" alignItems="center">
          <div className="twitter__header-text">{t('VIEW_TITLE_TWITTER')}</div>
        </Box>

        <InDevelopment/>
      </div>
    </div>
  );
};

export default Twitter;
