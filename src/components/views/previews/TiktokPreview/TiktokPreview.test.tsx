import React from 'react';
import { render } from '@testing-library/react';

import TiktokPreview from './TiktokPreview';

describe('components/views/tiktok-preview', () => {
  it('should render', () => {
    expect(render(<TiktokPreview/>)).toBeDefined();
  });
});
