import React from 'react';
import { render } from '@testing-library/react';

import LinkedinPreview from './LinkedinPreview';

describe('components/views/linkedin-preview', () => {
  it('should render', () => {
    expect(render(<LinkedinPreview/>)).toBeDefined();
  });
});
