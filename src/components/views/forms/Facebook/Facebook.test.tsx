import React from 'react';
import { render } from '@testing-library/react';
import Facebook from './Facebook';

import { StoreProvider } from 'src/store/StoreContext';

// TODO
describe('components/views/facebook', () => {
  it('should render', () => {
    expect(render(
      <StoreProvider>
        <Facebook/>
      </StoreProvider>
    )).toBeDefined();
  });
});
