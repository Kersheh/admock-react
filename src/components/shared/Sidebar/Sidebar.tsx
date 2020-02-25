import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { map } from 'lodash';
import { Button, Icon, Divider } from '@material-ui/core';
import classNames from 'classnames';
// import { useDispatch, useSelector } from 'react-redux'

import './Sidebar.scss';
import CONSTANTS from 'src/constants/common';
import SocialMediaIcons from 'src/components/shared/SocialMediaIcons/SocialMediaIcons';
import localStorageHelper from 'src/helpers/localStorage';
// import { openClose, setCategory } from 'src/actions';

const MEDIA_TYPE_VIEWS = map(CONSTANTS.MEDIA_TYPES);
const MEDIA_TYPE_TRANSLATIONS = {
  [CONSTANTS.MEDIA_TYPES.FACEBOOK]: 'MEDIA_TYPE_FACEBOOK',
  [CONSTANTS.MEDIA_TYPES.INSTAGRAM]: 'MEDIA_TYPE_INSTAGRAM',
  [CONSTANTS.MEDIA_TYPES.TWITTER]: 'MEDIA_TYPE_TWITTER',
  [CONSTANTS.MEDIA_TYPES.GOOGLE_SEARCH]: 'MEDIA_TYPE_GOOGLE_SEARCH',
  [CONSTANTS.MEDIA_TYPES.GOOGLE_DISPLAY]: 'MEDIA_TYPE_GOOGLE_DISPLAY',
  [CONSTANTS.MEDIA_TYPES.PINTEREST]: 'MEDIA_TYPE_PINTEREST',
  [CONSTANTS.MEDIA_TYPES.SNAPCHAT]: 'MEDIA_TYPE_SNAPCHAT',
  [CONSTANTS.MEDIA_TYPES.LINKEDIN]: 'MEDIA_TYPE_LINKEDIN',
  [CONSTANTS.MEDIA_TYPES.TIKTOK]: 'MEDIA_TYPE_TIKTOK'
};

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const [isCollapsed, setIsCollapsed] = useState(() => {
    return localStorageHelper.getLocalStorage('sidebar').isCollapsed || false;
  });

  const [activeView, setActiveView] = useState(() => history.location.pathname.slice(1));

  useEffect(() => {
    localStorageHelper.setLocalStorage('sidebar', { isCollapsed });
  }, [isCollapsed]);

  const navigate = (view: string) => {
    history.push(view);
    setActiveView(view);
  };

  // Examples to remove in favour of local management
  // const dispatch = useDispatch();
  // const isCollapsed = useSelector((state: any) => state.sidebar.isCollapsed);
  // const category = useSelector((state: any) => state.sidebar.category);
  // useEffect(() => console.log(isCollapsed, category));
  //
  // i.e.
  // <div onClick={() => dispatch(openClose())}></div>

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
