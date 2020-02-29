import React from 'react';
import { render } from '@testing-library/react';

import PinterestPreview from './PinterestPreview';

describe('components/views/pinterest-preview', () => {
  it('should render', () => {
    expect(render(<PinterestPreview/>)).toBeDefined();
  });
});
