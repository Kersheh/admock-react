import React from 'react';
import { render } from '@testing-library/react';

import GoogleDisplay from './GoogleDisplay';

describe('components/views/google-display', () => {
  it('should render', () => {
    expect(render(<GoogleDisplay/>)).toBeDefined();
  });
});
