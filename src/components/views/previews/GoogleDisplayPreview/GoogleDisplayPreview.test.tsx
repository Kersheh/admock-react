import React from 'react';
import { render } from '@testing-library/react';

import GoogleDisplayPreview from './GoogleDisplayPreview';

describe('components/views/google-display-preview', () => {
  it('should render', () => {
    expect(render(<GoogleDisplayPreview/>)).toBeDefined();
  });
});
