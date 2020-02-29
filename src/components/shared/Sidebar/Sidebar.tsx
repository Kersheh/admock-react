import React, { useState, useEffect } from 'react';
import { History, Location } from 'history';
import { useTranslation } from 'react-i18next';
import { map } from 'lodash';
import { Button, Icon, Divider } from '@material-ui/core';
import classNames from 'classnames';

import './Sidebar.scss';
import CONSTANTS from 'src/constants/common';
import TRANSLATION_MAP from 'src/constants/translationMap';
import SocialMediaIcons from 'src/components/shared/SocialMediaIcons/SocialMediaIcons';
import localStorageHelper from 'src/helpers/localStorage';

const MEDIA_TYPE_VIEWS = map(CONSTANTS.MEDIA_TYPES);
const MEDIA_TYPE_TRANSLATIONS = TRANSLATION_MAP.MEDIA_TYPE_TRANSLATIONS;

type SidebarProps = {
  history: History;
};

const Sidebar: React.FC<SidebarProps> = ({ history }: SidebarProps) => {
  const { t } = useTranslation();

  const [isCollapsed, setIsCollapsed] = useState(() => {
    return localStorageHelper.getLocalStorage('sidebar').isCollapsed || false;
  });

  const [activeView, setActiveView] = useState(() => history.location.pathname.slice(1));

  const navigate = (view: string) => {
    history.push(view);
  };

  const historyUnlisten = history.listen((location: Location) => {
    setActiveView(location.pathname.slice(1));
  });

  useEffect(() => {
    localStorageHelper.setLocalStorage('sidebar', { isCollapsed });

    return () => {
      historyUnlisten();
    };
  }, [isCollapsed, historyUnlisten]);

  const wrapperClassNames = classNames(
    'sidebar',
    { 'sidebar--collapsed': isCollapsed }
  );

  const collapseBtnClassNames = classNames(
    'collapse-btn',
    { 'collapse-btn--collapsed': isCollapsed }
  );

  const logoClassNames = classNames(
    'sidebar-logo__text',
    { 'sidebar-logo__text--collapsed': isCollapsed }
  );

  const logoDescClassNames = classNames(
    'sidebar-logo__desc',
    { 'sidebar-logo__desc--collapsed': isCollapsed }
  );

  const getActiveViewClassNames = (view: string) => {
    return classNames(
      'sidebar-options__option-btn',
      { 'active': view === activeView }
    );
  };

  return (
    <div className={wrapperClassNames}>
      <div className="sidebar-container">
        <div className="sidebar-logo">
          <div className={logoClassNames}>
            <span className="bold">{t('SIDEBAR_LOGO_TITLE_1')}</span>
            <span>{t('SIDEBAR_LOGO_TITLE_2')}</span>
          </div>
          <div className="sidebar-logo__btn" onClick={() => setIsCollapsed(!isCollapsed)}>
            <Button tabIndex={-1} disableRipple>
              <Icon>phonelink</Icon>
            </Button>
          </div>
        </div>

        <div className={logoDescClassNames}>
          <span>{t('SIDEBAR_LOGO_DESC')}</span>
        </div>
      </div>

      <div className="sidebar-menu sidebar-container sidebar-container--scroll-overflow">
        <div className="sidebar-options">
          {
            MEDIA_TYPE_VIEWS.map(view => {
              return (
                <div className="sidebar-options__option" key={view}>
                  <div className={getActiveViewClassNames(view)} onClick={() => navigate(view)}>
                    <Button>
                      <SocialMediaIcons icon={view}/>
                      <span className="sidebar-options__option-text">
                        {t(MEDIA_TYPE_TRANSLATIONS[view])}
                      </span>
                    </Button>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-divider">
          <Divider/>
        </div>

        <div className={collapseBtnClassNames} onClick={() => setIsCollapsed(!isCollapsed)}>
          <Button>
            <Icon>keyboard_arrow_left</Icon>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
