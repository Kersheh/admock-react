import React, { useContext, useMemo } from 'react';
import { Box, TextField, Select, MenuItem, Icon } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';

import { StoreContext } from 'src/store/StoreContext';
import { actionTypes } from 'src/store/reducers';

import './Facebook.scss';

export const FACEBOOK_CALL_TO_ACTION_OPTS = [
  { value: 'none', translate: 'FACEBOOK_CTA_BTN_NONE' },
  { value: 'apply', translate: 'FACEBOOK_CTA_BTN_APPLY_NOW' },
  { value: 'book', translate: 'FACEBOOK_CTA_BTN_BOOK_NOW' },
  { value: 'contact', translate: 'FACEBOOK_CTA_BTN_CONTACT_US' },
  { value: 'donate', translate: 'FACEBOOK_CTA_BTN_DONATE_NOW' },
  { value: 'download', translate: 'FACEBOOK_CTA_BTN_DOWNLOAD' },
  { value: 'learn', translate: 'FACEBOOK_CTA_BTN_LEARN_MORE' },
  { value: 'shop', translate: 'FACEBOOK_CTA_BTN_SHOP_NOW' },
  { value: 'signup', translate: 'FACEBOOK_CTA_BTN_SIGN_UP' },
  { value: 'watch', translate: 'FACEBOOK_CTA_BTN_WATCH_MORE' }
] as Array<{
  value: string;
  translate: string;
}>;

export const FACEBOOK_REACTION_TYPES = [
  'like', 'wow', 'angry', 'laugh', 'sad', 'love'
];

const PAGE_NAME_MAX_LEN = 75;
const PAGE_MESSAGE_MAX_LEN = 300;
const LINK_URL_MAX_LEN = 30;
const LINK_DESC_MAX_LEN = 25;
const LINK_CAPTION_MAX_LEN = 30;
const SOCIAL_COUNT_MAX_LEN = 9;

const Facebook: React.FC = () => {
  const { t } = useTranslation();
  const { state, dispatch } = useContext<any>(StoreContext);
  const {
    pageName,
    adType,
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
    // handle form onChange for TextField and Select updates
    const handleFormChange = (e: any) => {
      const { name, value } = e.target;

      if(['socialLikes', 'socialComments', 'socialShares'].includes(name)) {
        // slice leading zero on numeric inputs and prevent excess character length
        const sliceLeading = value.length > 1 && value[0] === '0' ? value.slice(1) : value;
        const truncateValue = sliceLeading.substring(0, SOCIAL_COUNT_MAX_LEN);
        dispatch({
          type: actionTypes.UPDATE_FACEBOOK_AD_PREVIEW,
          payload: { ...state.facebookPreviewProps, [name]: parseInt(truncateValue || 0) }
        });
      } else {
        dispatch({
          type: actionTypes.UPDATE_FACEBOOK_AD_PREVIEW,
          payload: { ...state.facebookPreviewProps, [name]: value }
        });
      }
    };

    // handle onChange for ToogleButtonGroup
    const handleButtonGroupChange = (_: any, value: Array<string>) => {
      dispatch({
        type: actionTypes.UPDATE_FACEBOOK_AD_PREVIEW,
        payload: { ...state.facebookPreviewProps, socialReactions: value }
      });
    };

    // handle onKeyPress for numeric fields restricting input
    const handleNumericOnKeyPress = (e: any) => {
      const name = e.target.name;

      // prevent non-numeric input and exceeding character length
      if(!/[0-9]/.test(e.key) || state.facebookPreviewProps[name].toString().length >= SOCIAL_COUNT_MAX_LEN) {
        e.preventDefault();
      }
    };

    // render call-to-action button Select preview
    const renderCtaButtonValue = (val: string | unknown) => {
      return (
        val === 'none' ?
          <span className="facebook__cta-btn-empty">{t('FACEBOOK_FIELD_CTA_TEXT')}</span> :
          <span>{t(FACEBOOK_CALL_TO_ACTION_OPTS.find(ctaOpt => ctaOpt.value === val)?.translate || '')}</span>
      );
    };

    return (
      <div className="facebook">
        <div className="facebook-container">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <div className="facebook__header">{t('VIEW_TITLE_FACEBOOK')}</div>

            <Select className="facebook__type" name="adType"
                    value={adType} onChange={handleFormChange}>
              <MenuItem value="image">
                <Box display="flex" alignItems="center">
                  <Icon>photo_camera</Icon>
                  <span className="facebook__type-text">{t('AD_TYPE_IMAGE')}</span>
                </Box>
              </MenuItem>
              <MenuItem value="video" disabled>
                <Box display="flex" alignItems="center">
                  <Icon>videocam</Icon>
                  <span className="facebook__type-text">{t('AD_TYPE_VIDEO')}</span>
                </Box>
              </MenuItem>
              <MenuItem value="carousel" disabled>
                <Box display="flex" alignItems="center">
                  <Icon>view_carousel</Icon>
                  <span className="facebook__type-text">{t('AD_TYPE_CAROUSEL')}</span>
                </Box>
              </MenuItem>
            </Select>
          </Box>

          <Box flexDirection="column" justifyContent="start" alignItems="start">
            <Box flexDirection="column">
              <Box className="facebook-form-container">
                <h4>{t('FACEBOOK_POST_INFO_HEADER')}</h4>

                <div className="facebook__text">{t('FACEBOOK_POST_INFO_TEXT')}</div>

                <TextField name="pageName" label={t('FACEBOOK_FIELD_PAGE_NAME_TEXT')}
                           value={pageName} onChange={handleFormChange} className="full-width"
                           helperText={`${pageName.length}/${PAGE_NAME_MAX_LEN}`}/>
                <TextField name="postMessage" label={t('FACEBOOK_FIELD_POST_MSG_TEXT')}
                           value={postMessage} onChange={handleFormChange} className="full-width"
                           helperText={`${postMessage.length}/${PAGE_MESSAGE_MAX_LEN}`}
                           multiline/>
              </Box>

              <Box className="facebook-form-container">
                <h4>{t('FACEBOOK_LINK_INFO_HEADER')}</h4>

                <div className="facebook__text">{t('FACEBOOK_LINK_INFO_TEXT')}</div>

                <TextField name="linkUrl" label={t('FACEBOOK_FIELD_LINK_URL_TEXT')}
                           value={linkUrl} onChange={handleFormChange} className="full-width"
                           helperText={`${linkUrl.length}/${LINK_URL_MAX_LEN}`}/>
                <TextField name="linkDesc" label={t('FACEBOOK_FIELD_LINK_DESC_TEXT')}
                           value={linkDesc} onChange={handleFormChange} className="full-width"
                           helperText={`${linkDesc.length}/${LINK_DESC_MAX_LEN}`}/>
                <TextField name="linkCaption" label={t('FACEBOOK_FIELD_LINK_CAPTION_TEXT')}
                           value={linkCaption} onChange={handleFormChange} className="full-width"
                           helperText={`${linkCaption.length}/${LINK_CAPTION_MAX_LEN}`}/>

                <Select className="facebook__cta-btn" name="ctaButton"
                        value={ctaButton} onChange={handleFormChange}
                        renderValue={renderCtaButtonValue}>
                  {
                    FACEBOOK_CALL_TO_ACTION_OPTS.map((ctaButton, key) => {
                      return (
                        <MenuItem value={ctaButton.value} key={key}>
                          <span className="facebook-preview__type-text">{t(ctaButton.translate)}</span>
                        </MenuItem>
                      );
                    })
                  }
                </Select>
              </Box>

              <Box className="facebook-form-container">
                <h4>{t('FACEBOOK_SOCIAL_HEADER')}</h4>

                <ToggleButtonGroup className="facebook__btn-group"
                                   value={socialReactions}
                                   onChange={handleButtonGroupChange}>
                  {
                    FACEBOOK_REACTION_TYPES.map((reaction, key) => {
                      return (
                        <ToggleButton value={reaction} className="facebook__icon" key={key}>
                          <span className={reaction}/>
                        </ToggleButton>
                      );
                    })
                  }
                </ToggleButtonGroup>

                <Box display="flex" justifyContent="space-between">
                  <Box flex="0 0 32%">
                    <TextField name="socialLikes" label={t('FACEBOOK_SOCIAL_LIKES_TEXT')}
                               value={socialLikes} className="full-width"
                               onChange={handleFormChange} onKeyPress={handleNumericOnKeyPress}/>
                  </Box>
                  <Box flex="0 0 32%">
                    <TextField name="socialComments" label={t('FACEBOOK_SOCIAL_COMMENTS_TEXT')}
                               value={socialComments} className="full-width"
                               onChange={handleFormChange} onKeyPress={handleNumericOnKeyPress}/>
                  </Box>
                  <Box flex="0 0 32%">
                    <TextField name="socialShares" label={t('FACEBOOK_SOCIAL_SHARES_TEXT')}
                               value={socialShares} className="full-width"
                               onChange={handleFormChange} onKeyPress={handleNumericOnKeyPress}/>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    );
  }, [
    t,
    dispatch,
    // state.facebookPreviewProps, // TODO: Fix this, it causes re-render but react-hooks/exhaustive-deps complains
    pageName,
    adType,
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

export default Facebook;
