import React from 'react';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import './Linkedin.scss';

import { InDevelopment } from 'src/components/temp/InDevelopment';

const Linkedin: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="linkedin">
      <div className="linkedin-container">
        <Box className="linkedin__header" display="flex" justifyContent="space-between" alignItems="center">
          <div className="linkedin__header-text">{t('VIEW_TITLE_LINKEDIN')}</div>
        </Box>

        <InDevelopment/>
      </div>
    </div>
  );
};

export default Linkedin;
