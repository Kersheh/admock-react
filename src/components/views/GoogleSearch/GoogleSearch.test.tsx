import React from 'react';
import { render } from '@testing-library/react';

import GoogleSearch from './GoogleSearch';

describe('components/views/google-search', () => {
  it('should render', () => {
    expect(render(<GoogleSearch/>)).toBeDefined();
  });
});
