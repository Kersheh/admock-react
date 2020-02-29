import React from 'react';
import { render } from '@testing-library/react';

import InstagramPreview from './InstagramPreview';

describe('components/views/instagram-preview', () => {
  it('should render', () => {
    expect(render(<InstagramPreview/>)).toBeDefined();
  });
});
