import React from 'react';
import { render } from '@testing-library/react';

import Facebook from './Facebook';

describe('components/views/facebook', () => {
  it('should render', () => {
    expect(render(<Facebook/>)).toBeDefined();
  });
});
