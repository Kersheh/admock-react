import React from 'react';
import { render } from '@testing-library/react';

import Twitter from './Twitter';

describe('components/views/twitter', () => {
  it('should render', () => {
    expect(render(<Twitter/>)).toBeDefined();
  });
});
