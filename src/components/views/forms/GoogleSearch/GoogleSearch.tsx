import React from 'react';
import { Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import './GoogleSearch.scss';

import { InDevelopment } from 'src/components/temp/InDevelopment';

const GoogleSearch: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="google-search">
      <div className="google-search-container">
        <Box className="google-search__header" display="flex" justifyContent="space-between" alignItems="center">
          <div className="google-search__header-text">{t('VIEW_TITLE_GOOGLE_SEARCH')}</div>
        </Box>

        <InDevelopment/>
      </div>
    </div>
  );
};

export default GoogleSearch;
