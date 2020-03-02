import { Reducer, ReducerState } from 'react';
// import logger, { LogLevel } from '../helpers/logger';

const initialState: ReducerState<any> = {
  facebookPreviewProps: {
    pageName: '',
    adType: 'image',
    postMessage: '',
    linkUrl: '',
    linkDesc: '',
    linkCaption: '',
    ctaButton: 'none',
    socialReactions: [],
    socialLikes: 0,
    socialComments: 0,
    socialShares: 0,
    pageLogo: null,
    adImage: null
  },
  instagramPreviewProps: {},
  twitterPreviewProps: {},
  googleSearchPreviewProps: {},
  googleDisplayPreviewProps: {},
  pinterestPreviewProps: {},
  snapchatPreviewProps: {},
  linkedinPreviewProps: {},
  tiktokPreviewProps: {}
};

const actionTypes = {
  UPDATE_FACEBOOK_AD_PREVIEW: 'UPDATE_FACEBOOK_AD_PREVIEW',
  UPDATE_INSTAGRAM_AD_PREVIEW: 'UPDATE_INSTAGRAM_AD_PREVIEW',
  UPDATE_TWITTER_AD_PREVIEW: 'UPDATE_TWITTER_AD_PREVIEW',
  UPDATE_GOOGLE_SEARCH_AD_PREVIEW: 'UPDATE_GOOGLE_SEARCH_AD_PREVIEW',
  UPDATE_GOOGLE_DISPLAY_AD_PREVIEW: 'UPDATE_GOOGLE_DISPLAY_AD_PREVIEW',
  UPDATE_PINTEREST_AD_PREVIEW: 'UPDATE_PINTEREST_AD_PREVIEW',
  UPDATE_SNAPCHAT_AD_PREVIEW: 'UPDATE_SNAPCHAT_AD_PREVIEW',
  UPDATE_LINKEDIN_AD_PREVIEW: 'UPDATE_LINKEDIN_AD_PREVIEW',
  UPDATE_TIKTOK_AD_PREVIEW: 'UPDATE_TIKTOK_AD_PREVIEW'
};

const reducer: Reducer<any, any> = (state = initialState, action) => {
  // logger.log(LogLevel.INFO, {
  //   oldState: state,
  //   type: action.type,
  //   payload: action.payload
  // });

  switch(action.type) {
    case actionTypes.UPDATE_FACEBOOK_AD_PREVIEW:
      return {
        ...state,
        facebookPreviewProps: action.payload
      };
    case actionTypes.UPDATE_INSTAGRAM_AD_PREVIEW:
      return {
        ...state,
        instagramPreviewProps: action.payload
      };
    case actionTypes.UPDATE_TWITTER_AD_PREVIEW:
      return {
        ...state,
        twitterPreviewProps: action.payload
      };
    case actionTypes.UPDATE_GOOGLE_SEARCH_AD_PREVIEW:
      return {
        ...state,
        googleSearchPreviewProps: action.payload
      };
    case actionTypes.UPDATE_GOOGLE_DISPLAY_AD_PREVIEW:
      return {
        ...state,
        googleDisplayPreviewProps: action.payload
      };
    case actionTypes.UPDATE_PINTEREST_AD_PREVIEW:
      return {
        ...state,
        pinterestPreviewProps: action.payload
      };
    case actionTypes.UPDATE_SNAPCHAT_AD_PREVIEW:
      return {
        ...state,
        snapchatPreviewProps: action.payload
      };
    case actionTypes.UPDATE_LINKEDIN_AD_PREVIEW:
      return {
        ...state,
        linkedinPreviewProps: action.payload
      };
    case actionTypes.UPDATE_TIKTOK_AD_PREVIEW:
      return {
        ...state,
        tiktokPreviewProps: action.payload
      };
    default:
      throw new Error(`Unexpected action: ${action.type}`);
  }
};

export { initialState, actionTypes, reducer };
