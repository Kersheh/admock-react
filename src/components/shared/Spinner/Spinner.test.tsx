import React from 'react';
import { render } from '@testing-library/react';

import Spinner from './Spinner';

describe('components/shared/footer', () => {
  it('should render ', () => {
    expect(render(<Spinner/>)).toBeDefined();
  });
});
