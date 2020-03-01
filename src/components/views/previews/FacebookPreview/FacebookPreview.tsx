import React, { useState } from 'react';
import { Box, Icon } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { chain } from 'lodash';

import './FacebookPreview.scss';

import { FACEBOOK_CALL_TO_ACTION_OPTS } from 'src/components/views/forms/Facebook/Facebook';

const FACEBOOK_CALL_TO_ACTION_BTN_TRANSLATIONS =
  chain(FACEBOOK_CALL_TO_ACTION_OPTS)
    .keyBy('value')
    .mapValues('translate')
    .value();

type FacebookPreviewProps = {
  pageName: string;
  postMessage: string;
  ctaButton: string;
  linkUrl: string;
  linkDesc: string;
  linkCaption: string;
  socialReactions: Array<string>;
  socialLikes: number;
  socialComments: number;
  socialShares: number;
  pageLogo: any;
  adImage: any;
}

const FacebookPreview: React.FC = () => {
  const { t } = useTranslation();

  const [previewProps] = useState({
    pageName: t('FACEBOOK_PREVIEW_DEFAULT_PAGE_NAME'),
    postMessage: t('FACEBOOK_PREVIEW_DEFAULT_POST_MESSAGE'),
    ctaButton: 'contact',
    linkUrl: t('FACEBOOK_PREVIEW_DEFAULT_LINK_URL'),
    linkDesc: t('FACEBOOK_PREVIEW_DEFAULT_LINK_DESC'),
    linkCaption: t('FACEBOOK_PREVIEW_DEFAULT_LINK_CAPTION'),
    socialReactions: ['like', 'love'],
    socialLikes: 64323,
    socialComments: 504,
    socialShares: 27,
    pageLogo: null,
    adImage: null
  } as FacebookPreviewProps);

  const bigIntegerFormat = (value: number) => {
    return value >= 1000000 ? `${Math.floor(10 * value / 1000000) / 10}M` :
      value >= 1000 ? `${Math.floor(10 * value / 1000) / 10}K` : `${value}`;
  };

  return (
    <Box className="facebook-preview" display="flex" justifyContent="center">
      <div className="facebook-preview__card">
        <Box display="flex" flexDirection="row" className="facebook-preview-header">
          {
            !previewProps.pageLogo &&
              <div className="facebook-preview-header__logo">
                <Icon className="facebook-preview-header__logo-placeholder-icon">photo_camera</Icon>
              </div>
          }

          <Box display="flex" flex="1" justifyContent="space-between" alignItems="start">
            <Box display="flex" flexDirection="column">
              <div className="facebook-preview-header__page-name">{previewProps.pageName}</div>
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
          {previewProps.postMessage}
        </div>

        <Box className="facebook-preview-image-container" display="flex" flex="1"
             justifyContent="center" alignItems="center">
          {
            !previewProps.adImage &&
              <Icon className="facebook-preview__placeholder-icon">photo_camera</Icon>
          }
        </Box>

        <a href={previewProps.linkUrl ? '//' + previewProps.linkUrl : ''}
           target="_blank" rel="noreferrer noopener">
          <Box className="facebook-preview-link" display="flex" justifyContent="space-between" alignItems="center">
            <Box display="flex" flexDirection="column">
              <div className="facebook-preview-link__url">{previewProps.linkUrl}</div>
              <div className="facebook-preview-link__desc">{previewProps.linkDesc}</div>
              <div className="facebook-preview-link__caption">{previewProps.linkCaption}</div>
            </Box>

            {
              previewProps.ctaButton &&
                <div className="facebook-preview-link__btn">
                  {t(FACEBOOK_CALL_TO_ACTION_BTN_TRANSLATIONS[previewProps.ctaButton])}
                </div>
            }
          </Box>
        </a>

        {
          previewProps.socialReactions.length > 0 && previewProps.socialLikes > 0 && previewProps.socialShares > 0 &&
            <Box className="facebook-preview-social" display="flex" justifyContent="space-between">
              <Box display="flex" justifyContent="start" alignItems="center">
                {
                  previewProps.socialLikes > 0 &&
                    <Box display="flex" justifyContent="start" alignItems="center">
                      { previewProps.socialReactions.includes('like') && <span className="facebook-preview-social-icon like"></span> }
                      { previewProps.socialReactions.includes('wow') && <span className="facebook-preview-social-icon wow"></span> }
                      { previewProps.socialReactions.includes('angry') && <span className="facebook-preview-social-icon angry"></span> }
                      { previewProps.socialReactions.includes('laugh') && <span className="facebook-preview-social-icon laugh"></span> }
                      { previewProps.socialReactions.includes('sad') && <span className="facebook-preview-social-icon sad"></span> }
                      { previewProps.socialReactions.includes('love') && <span className="facebook-preview-social-icon love"></span> }
                    </Box>
                }

                {
                  previewProps.socialReactions.length > 0 && previewProps.socialLikes > 0 &&
                  <span className="facebook-preview-social__likes">{bigIntegerFormat(previewProps.socialLikes)}</span>
                }
              </Box>

              <Box display="flex">
                {
                  previewProps.socialComments > 0 &&
                    <span className="facebook-preview-social__comments">
                      {bigIntegerFormat(previewProps.socialComments)} {previewProps.socialComments > 1 ? t('FACEBOOK_PREVIEW_COMMENTS') : t('FACEBOOK_PREVIEW_COMMENT')}
                    </span>
                }
                {
                  previewProps.socialShares > 0 &&
                    <span className="facebook-preview-social__shares">
                      {bigIntegerFormat(previewProps.socialShares)} {previewProps.socialShares > 1 ? t('FACEBOOK_PREVIEW_SHARES') :  t('FACEBOOK_PREVIEW_SHARE')}
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
};

export default FacebookPreview;
