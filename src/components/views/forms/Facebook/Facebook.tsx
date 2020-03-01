import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import { Box, TextField, Select, MenuItem, Icon } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';

import './Facebook.scss';

export const FACEBOOK_CALL_TO_ACTION_OPTS = [
  { value: 'apply', translate: 'FACEBOOK_CTA_BTN_APPLY_NOW' },
  { value: 'book', translate: 'FACEBOOK_CTA_BTN_BOOK_NOW' },
  { value: 'contact', translate: 'FACEBOOK_CTA_BTN_CONTACT_US' },
  { value: 'donate', translate: 'FACEBOOK_CTA_BTN_DONATE_NOW' },
  { value: 'download', translate: 'FACEBOOK_CTA_BTN_DOWNLOAD' },
  { value: 'learn', translate: 'FACEBOOK_CTA_BTN_LEARN_MORE' },
  { value: 'shop', translate: 'FACEBOOK_CTA_BTN_SHOP_NOW' },
  { value: 'signup', translate: 'FACEBOOK_CTA_BTN_SIGN_UP' },
  { value: 'watch', translate: 'FACEBOOK_CTA_BTN_WATCH_MORE' }
];

const PAGE_NAME_MAX_LEN = 30;
const LINK_URL_MAX_LEN = 30;
const LINK_DESC_MAX_LEN = 30;
const LINK_CAPTION_MAX_LEN = 30;

type FacebookFormGroup = {
  pageName: string;
  adType: string;
  postMessage: string;
  linkUrl: string;
  linkDescription: string;
  linkCaption: string;
  socialReactions: Array<string>;
  socialLikes: number;
  socialComments: number;
  socialShares: number;
}

const Facebook: React.FC = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    pageName: '',
    adType: 'image',
    postMessage: '',
    linkUrl: '',
    linkDescription: '',
    linkCaption: '',
    socialReactions: [],
    socialLikes: 0,
    socialComments: 0,
    socialShares: 0
  } as FacebookFormGroup);

  // todo: determine Select onChange event type
  const handleFormChange = (e: ChangeEvent<HTMLInputElement> | any) => {
    const { name, value } = e.target;

    if(['socialLikes', 'socialComments', 'socialShares'].includes(name)) {
      // slice leading zero on numeric inputs
      const sliceLeading = value.length > 1 && value[0] === '0' ? value.slice(1) : value;
      setForm({ ...form, [name]: sliceLeading });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleButtonGroupChange = (_: any, value: Array<string>) => {
    setForm({ ...form, socialReactions: value });
  };

  const handleNumericOnKeyPress = (e: KeyboardEvent) => {
    // prevent non-numeric
    if(!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="facebook">
      <div className="facebook-container">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <div className="facebook__header">{t('VIEW_TITLE_FACEBOOK')}</div>

          <Select className="facebook__type" name="adType"
                  value={form.adType} onChange={handleFormChange}>
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

              <TextField name="pageName" label={t('FACEBOOK_FIELD_PAGE_NAME_TEXT')} className="full-width"
                         value={form.pageName} onChange={handleFormChange} helperText={`${form.pageName.length}/${PAGE_NAME_MAX_LEN}`}/>
              <TextField name="postMessage" label={t('FACEBOOK_FIELD_POST_MSG_TEXT')} className="full-width"
                         value={form.postMessage} onChange={handleFormChange} multiline/>
            </Box>

            <Box className="facebook-form-container">
              <h4>{t('FACEBOOK_LINK_INFO_HEADER')}</h4>

              <div className="facebook__text">{t('FACEBOOK_LINK_INFO_TEXT')}</div>
              <TextField name="linkUrl" label={t('FACEBOOK_FIELD_LINK_URL_TEXT')} className="full-width"
                         value={form.linkUrl} onChange={handleFormChange} helperText={`${form.linkUrl.length}/${LINK_URL_MAX_LEN}`}/>
              <TextField name="linkDescription" label={t('FACEBOOK_FIELD_LINK_DESC_TEXT')} className="full-width"
                         value={form.linkDescription} onChange={handleFormChange} helperText={`${form.linkDescription.length}/${LINK_DESC_MAX_LEN}`}/>
              <TextField name="linkCaption" label={t('FACEBOOK_FIELD_LINK_CAPTION_TEXT')} className="full-width"
                         value={form.linkCaption} onChange={handleFormChange} helperText={`${form.linkCaption.length}/${LINK_CAPTION_MAX_LEN}`}/>
            </Box>

            <Box className="facebook-form-container">
              <h4>{t('FACEBOOK_SOCIAL_HEADER')}</h4>

              <ToggleButtonGroup className="facebook__btn-group"
                                 value={form.socialReactions}
                                 onChange={handleButtonGroupChange}>
                <ToggleButton value="like" className="facebook__icon">
                  <span className="like"/>
                </ToggleButton>
                <ToggleButton value="wow" className="facebook__icon">
                  <span className="wow"/>
                </ToggleButton>
                <ToggleButton value="angry" className="facebook__icon">
                  <span className="angry"/>
                </ToggleButton>
                <ToggleButton value="laugh" className="facebook__icon">
                  <span className="laugh"/>
                </ToggleButton>
                <ToggleButton value="sad" className="facebook__icon">
                  <span className="sad"/>
                </ToggleButton>
                <ToggleButton value="love" className="facebook__icon">
                  <span className="love"/>
                </ToggleButton>
              </ToggleButtonGroup>

              <Box display="flex" justifyContent="space-between">
                <Box flex="0 0 32%">
                  <TextField name="socialLikes" label={t('FACEBOOK_SOCIAL_LIKES_TEXT')} className="full-width"
                             value={form.socialLikes} onKeyPress={handleNumericOnKeyPress}
                             onChange={handleFormChange}/>
                </Box>
                <Box flex="0 0 32%">
                  <TextField name="socialComments" label={t('FACEBOOK_SOCIAL_COMMENTS_TEXT')} className="full-width"
                             value={form.socialComments} onKeyPress={handleNumericOnKeyPress}
                             onChange={handleFormChange}/>
                </Box>
                <Box flex="0 0 32%">
                  <TextField name="socialShares" label={t('FACEBOOK_SOCIAL_SHARES_TEXT')} className="full-width"
                             value={form.socialShares}  onKeyPress={handleNumericOnKeyPress}
                             onChange={handleFormChange}/>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Facebook;