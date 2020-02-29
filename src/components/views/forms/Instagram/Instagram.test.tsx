import React from 'react';
import { render } from '@testing-library/react';

import Instagram from './Instagram';

describe('components/views/instagram', () => {
  it('should render', () => {
    expect(render(<Instagram/>)).toBeDefined();
  });
});
