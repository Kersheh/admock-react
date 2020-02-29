import React from 'react';
import { render } from '@testing-library/react';

import FormPanel from './FormPanel';

describe('components/shared/form-panel', () => {
  it('should render ', () => {
    expect(render(<FormPanel/>)).toBeDefined();
  });
});
