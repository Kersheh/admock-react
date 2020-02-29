import React from 'react';
import { render } from '@testing-library/react';

import Linkedin from './Linkedin';

describe('components/views/linkedin', () => {
  it('should render', () => {
    expect(render(<Linkedin/>)).toBeDefined();
  });
});
