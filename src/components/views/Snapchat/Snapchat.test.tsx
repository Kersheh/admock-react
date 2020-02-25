import React from 'react';
import { render } from '@testing-library/react';

import Snapchat from './Snapchat';

describe('components/views/snapchat', () => {
  it('should render', () => {
    expect(render(<Snapchat/>)).toBeDefined();
  });
});
