import React from 'react';
import { render } from '@testing-library/react';

import FacebookPreview from './FacebookPreview';

describe('components/views/facebook-preview', () => {
  it('should render', () => {
    expect(render(<FacebookPreview/>)).toBeDefined();
  });
});
