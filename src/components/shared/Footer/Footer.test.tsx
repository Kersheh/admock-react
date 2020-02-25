import React from 'react';
import { render } from '@testing-library/react';

import Footer from './Footer';

describe('components/shared/footer', () => {
  it('should render ', () => {
    expect(render(<Footer/>)).toBeDefined();
  });
});
