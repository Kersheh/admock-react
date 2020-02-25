import React from 'react';

import './Footer.scss';
import { version } from 'src/../package.json';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <span className="footer-text">v{version}</span>
    </div>
  );
};

export default Footer;
