import React from 'react';
import { render } from '@testing-library/react';
import FacebookPreview from './FacebookPreview';

import { StoreProvider } from 'src/store/StoreContext';

// TODO
describe('components/views/facebook-preview', () => {
  it('should render', () => {
    expect(render(
      <StoreProvider>
        <FacebookPreview/>
      </StoreProvider>
    )).toBeDefined();
  });
});
