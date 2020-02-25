import React from 'react';
import { render } from '@testing-library/react';

import SocialMediaIcons from './SocialMediaIcons';

describe('components/shared/footer', () => {
  it('should render ', () => {
    expect(render(<SocialMediaIcons icon="facebook"/>)).toBeDefined();
  });
});
