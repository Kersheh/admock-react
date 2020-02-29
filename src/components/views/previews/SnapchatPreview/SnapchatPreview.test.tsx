import React from 'react';
import { render } from '@testing-library/react';

import SnapchatPreview from './SnapchatPreview';

describe('components/views/snapchat-preview', () => {
  it('should render', () => {
    expect(render(<SnapchatPreview/>)).toBeDefined();
  });
});
