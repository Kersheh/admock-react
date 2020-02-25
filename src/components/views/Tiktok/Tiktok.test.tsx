import React from 'react';
import { render } from '@testing-library/react';

import Tiktok from './Tiktok';

describe('components/views/tiktok', () => {
  it('should render', () => {
    expect(render(<Tiktok/>)).toBeDefined();
  });
});
