import React from 'react';
import { render } from '@testing-library/react';

import TwitterPreview from './TwitterPreview';

describe('components/views/twitter-preview', () => {
  it('should render', () => {
    expect(render(<TwitterPreview/>)).toBeDefined();
  });
});
