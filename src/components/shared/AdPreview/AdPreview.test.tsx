import React from 'react';
import { render } from '@testing-library/react';

import AdPreview from './AdPreview';

describe('components/shared/form-panel', () => {
  it('should render ', () => {
    expect(render(<AdPreview/>)).toBeDefined();
  });
});
