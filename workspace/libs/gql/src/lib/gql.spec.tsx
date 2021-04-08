import React from 'react';
import { render } from '@testing-library/react';

import Gql from './gql';

describe('Gql', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Gql />);
    expect(baseElement).toBeTruthy();
  });
});
