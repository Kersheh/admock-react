import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('src/components/shared/FormPanel/FormPanel', () => () => 'FormPanel');
jest.mock('src/components/shared/AdPreview/AdPreview', () => () => 'AdPreview');
jest.mock('src/components/shared/Spinner/Spinner', () => () => 'Spinner');
jest.mock('src/components/shared/Sidebar/Sidebar', () => () => 'Sidebar');
jest.mock('src/components/shared/Footer/Footer', () => () => 'Footer');
jest.mock('src/components/shared/BrowserTitle/BrowserTitle', () => () => 'BrowserTitle');
jest.mock('src/components/views/forms/Facebook/Facebook', () => () => 'Facebook');
jest.mock('src/components/views/forms/Instagram/Instagram', () => () => 'Instagram');
jest.mock('src/components/views/forms/Twitter/Twitter', () => () => 'Twitter');
jest.mock('src/components/views/forms/GoogleSearch/GoogleSearch', () => () => 'GoogleSearch');
jest.mock('src/components/views/forms/GoogleDisplay/GoogleDisplay', () => () => 'GoogleDisplay');
jest.mock('src/components/views/forms/Pinterest/Pinterest', () => () => 'Pinterest');
jest.mock('src/components/views/forms/Snapchat/Snapchat', () => () => 'Snapchat');
jest.mock('src/components/views/forms/Linkedin/Linkedin', () => () => 'Linkedin');
jest.mock('src/components/views/forms/Tiktok/Tiktok', () => () => 'Tiktok');
jest.mock('src/components/views/previews/FacebookPreview/FacebookPreview', () => () => 'FacebookPreview');
jest.mock('src/components/views/previews/InstagramPreview/InstagramPreview', () => () => 'InstagramPreview');
jest.mock('src/components/views/previews/TwitterPreview/TwitterPreview', () => () => 'TwitterPreview');
jest.mock('src/components/views/previews/GoogleSearchPreview/GoogleSearchPreview', () => () => 'GoogleSearchPreview');
jest.mock('src/components/views/previews/GoogleDisplayPreview/GoogleDisplayPreview', () => () => 'GoogleDisplayPreview');
jest.mock('src/components/views/previews/PinterestPreview/PinterestPreview', () => () => 'PinterestPreview');
jest.mock('src/components/views/previews/SnapchatPreview/SnapchatPreview', () => () => 'SnapchatPreview');
jest.mock('src/components/views/previews/LinkedinPreview/LinkedinPreview', () => () => 'LinkedinPreview');
jest.mock('src/components/views/previews/TiktokPreview/TiktokPreview', () => () => 'TiktokPreview');

// TODO
describe('app', () => {
  it('should render', () => {
    expect(render(<App/>)).toBeDefined();
  });
});
