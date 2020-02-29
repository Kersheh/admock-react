import React, { useState, useEffect, useMemo } from 'react';
import { History, Location } from 'history';
import { useTranslation } from 'react-i18next';

import TRANSLATION_MAP from 'src/constants/translationMap';
const MEDIA_TYPE_TRANSLATIONS = TRANSLATION_MAP.MEDIA_TYPE_TRANSLATIONS;

type BrowserTitleProps = {
  history: History;
};

const BrowserTitle: React.FC<BrowserTitleProps> = ({ history }: BrowserTitleProps) => {
  const { t } = useTranslation();
  const [routePath, setRoutePath] = useState(history.location.pathname);

  const historyUnlisten = history.listen((location: Location) => {
    setRoutePath(location.pathname);
  });

  useMemo(() => {
    document.title = routePath ?
      `${t('APP_TITLE')} — ${t(MEDIA_TYPE_TRANSLATIONS[routePath.slice(1)])}` :
      t('APP_TITLE');
  }, [t, routePath]);

  useEffect(() => () => historyUnlisten(), [historyUnlisten]);

  return (
    null
  );
};

export default BrowserTitle;
