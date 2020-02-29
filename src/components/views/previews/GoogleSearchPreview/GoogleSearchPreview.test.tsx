import React from 'react';
import { render } from '@testing-library/react';

import GoogleSearchPreview from './GoogleSearchPreview';

describe('components/views/google-search-preview', () => {
  it('should render', () => {
    expect(render(<GoogleSearchPreview/>)).toBeDefined();
  });
});
