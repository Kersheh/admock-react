import React from 'react';
import { CircularProgress } from '@material-ui/core';

import './Spinner.scss';

type SpinnerProps = {
  size?: number;
};

const Spinner: React.FC<SpinnerProps> = ({ size = 40 }: SpinnerProps) => {
  return (
    <div className="spinner-wrapper">
      <CircularProgress size={size} className="spinner"/>
    </div>
  );
};

export default Spinner;
