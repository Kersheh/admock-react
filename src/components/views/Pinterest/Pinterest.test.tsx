import React from 'react';
import { render } from '@testing-library/react';

import Pinterest from './Pinterest';

describe('components/views/pinterest', () => {
  it('should render', () => {
    expect(render(<Pinterest/>)).toBeDefined();
  });
});
