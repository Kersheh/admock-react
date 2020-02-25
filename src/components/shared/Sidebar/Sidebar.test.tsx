import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { render } from '@testing-library/react';

import Sidebar from './Sidebar';

describe('components/shared/sidebar', () => {
  beforeEach(() => {
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useHistory: () => ({
        location: {
          pathname: '/'
        },
        push: jest.fn()
      }),
    }));
  });

  it('should render', () => {
    expect(render(
      <BrowserRouter>
        <Sidebar history={createBrowserHistory()}/>
      </BrowserRouter>
    )).toBeDefined();
  });
});
