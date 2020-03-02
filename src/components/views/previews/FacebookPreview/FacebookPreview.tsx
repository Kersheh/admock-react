import React, { useMemo, useContext } from 'react';
import { Box, Icon } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { chain } from 'lodash';

import { StoreContext } from 'src/store/StoreContext';
import { FACEBOOK_CALL_TO_ACTION_OPTS, FACEBOOK_REACTION_TYPES } from 'src/components/views/forms/Facebook/Facebook';

import './FacebookPreview.scss';

const FACEBOOK_CALL_TO_ACTION_BTN_TRANSLATIONS =
  chain(FACEBOOK_CALL_TO_ACTION_OPTS)
    .keyBy('value')
    .mapValues('translate')
    .value();

const FacebookPreview: React.FC = () => {
  const { t } = useTranslation();
  const { state } = useContext<any>(StoreContext);
  const {
    pageName,
    // adType,
    postMessage,
    linkUrl,
    linkDesc,
    linkCaption,
    ctaButton,
    socialReactions,
    socialLikes,
    socialComments,
    socialShares,
    pageLogo,
    adImage
  } = state.facebookPreviewProps;

  return useMemo(() => {
    // display defaults when no user input
    const facebookPreviewPropDefaults = {
      pageName: t('FACEBOOK_PREVIEW_DEFAULT_PAGE_NAME'),
      postMessage: t('FACEBOOK_PREVIEW_DEFAULT_POST_MESSAGE'),
      ctaButton: 'contact',
      linkUrl: t('FACEBOOK_PREVIEW_DEFAULT_LINK_URL'),
      linkDesc: t('FACEBOOK_PREVIEW_DEFAULT_LINK_DESC'),
      linkCaption: t('FACEBOOK_PREVIEW_DEFAULT_LINK_CAPTION')
    };

    // format large integers 1.XK or 1.XM
    const bigIntegerFormat = (value: number) => {
      return value >= 1000000 ? `${Math.floor(10 * value / 1000000) / 10}M` :
        value >= 1000 ? `${Math.floor(10 * value / 1000) / 10}K` : `${value}`;
    };

    return (
      <Box className="facebook-preview" display="flex" justifyContent="center">
        <div className="facebook-preview__card">
          <Box display="flex" flexDirection="row" className="facebook-preview-header">
            {
              !pageLogo &&
                <div className="facebook-preview-header__logo">
                  <Icon className="facebook-preview-header__logo-placeholder-icon">photo_camera</Icon>
                </div>
            }

            <Box display="flex" flex="1" justifyContent="space-between" alignItems="start">
              <Box display="flex" flexDirection="column">
                <div className="facebook-preview-header__page-name">
                  {pageName || facebookPreviewPropDefaults.pageName}
                </div>
                <Box display="flex" flexDirection="row" justifyContent="start" alignItems="center" className="facebook-preview-header__sponsored">
                  <a href="https://www.facebook.com/ads/about" className="facebook-preview-header__sponsored-link"
                     target="_blank" rel="noreferrer noopener">
                    {t('FACEBOOK_PREVIEW_SPONSORED')}
                  </a>
                  <span>&nbsp;·&nbsp;</span>
                  <span className="facebook-preview-header__earth-icon"></span>
                </Box>
              </Box>

              <div className="facebook-preview-header__ellipsis">…</div>
            </Box>
          </Box>

          <div className="facebook-preview-message">
            {postMessage || facebookPreviewPropDefaults.postMessage}
          </div>

          <Box className="facebook-preview-image-container" display="flex" flex="1"
               justifyContent="center" alignItems="center">
            {
              !adImage &&
                <Icon className="facebook-preview__placeholder-icon">photo_camera</Icon>
            }
          </Box>

          <a href={linkUrl ? '//' + linkUrl : ''}
             target="_blank" rel="noreferrer noopener">
            <Box className="facebook-preview-link" display="flex" justifyContent="space-between" alignItems="center">
              <Box display="flex" flexDirection="column">
                <div className="facebook-preview-link__url">{linkUrl || facebookPreviewPropDefaults.linkUrl}</div>
                <div className="facebook-preview-link__desc">{linkDesc || facebookPreviewPropDefaults.linkDesc}</div>
                <div className="facebook-preview-link__caption">{linkCaption || facebookPreviewPropDefaults.linkCaption}</div>
              </Box>

              {
                ctaButton && ctaButton !== 'none' &&
                  <div className="facebook-preview-link__btn">
                    {t(FACEBOOK_CALL_TO_ACTION_BTN_TRANSLATIONS[ctaButton])}
                  </div>
              }
            </Box>
          </a>

          {
            ((socialLikes > 0 && socialReactions.length > 0) || socialComments > 0 || socialShares > 0) &&
              <Box className="facebook-preview-social" display="flex" justifyContent="space-between">
                <Box display="flex" justifyContent="start" alignItems="center">
                  {
                    socialLikes > 0 &&
                      <Box display="flex" justifyContent="start" alignItems="center">
                        {
                          FACEBOOK_REACTION_TYPES.map((reactionType, key) => {
                            return socialReactions.includes(reactionType) &&
                              (
                                <span key={key} className={`facebook-preview-social-icon ${reactionType}`}></span>
                              );
                          })
                        }
                      </Box>
                  }

                  {
                    socialReactions.length > 0 && socialLikes > 0 &&
                      <span className="facebook-preview-social__likes">{bigIntegerFormat(socialLikes)}</span>
                  }
                </Box>

                <Box display="flex">
                  {
                    socialComments > 0 &&
                      <span className="facebook-preview-social__comments">
                        {bigIntegerFormat(socialComments)} {socialComments > 1 ? t('FACEBOOK_PREVIEW_COMMENTS') : t('FACEBOOK_PREVIEW_COMMENT')}
                      </span>
                  }
                  {
                    socialShares > 0 &&
                      <span className="facebook-preview-social__shares">
                        {bigIntegerFormat(socialShares)} {socialShares > 1 ? t('FACEBOOK_PREVIEW_SHARES') :  t('FACEBOOK_PREVIEW_SHARE')}
                      </span>
                  }
                </Box>
              </Box>
          }

          <Box display="flex" className="facebook-preview-social-buttons">
            <Box display="flex" flexGrow="1">
              <Box className="facebook-preview-social-buttons__btn" display="flex" flex="1" justifyContent="center" alignItems="center">
                <span className="like"></span>
                <span>{t('FACEBOOK_PREVIEW_LIKE_BTN')}</span>
              </Box>
              <Box className="facebook-preview-social-buttons__btn" display="flex" flex="1" justifyContent="center" alignItems="center">
                <span className="comment"></span>
                <span>{t('FACEBOOK_PREVIEW_COMMENT_BTN')}</span>
              </Box>
              <Box className="facebook-preview-social-buttons__btn" display="flex" flex="1" justifyContent="center" alignItems="center">
                <span className="share"></span>
                <span>{t('FACEBOOK_PREVIEW_SHARE_BTN')}</span>
              </Box>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center" className="facebook-preview-social-buttons__btn account">
              <Icon className="facebook-preview-social-buttons__img">account_circle</Icon>
              <Icon className="facebook-preview-social-buttons__arrow">arrow_drop_down</Icon>
            </Box>
          </Box>
        </div>
      </Box>
    );
  }, [
    t,
    pageName,
    // adType,
    postMessage,
    linkUrl,
    linkDesc,
    linkCaption,
    ctaButton,
    socialReactions,
    socialLikes,
    socialComments,
    socialShares,
    pageLogo,
    adImage
  ]);
};

export default FacebookPreview;
