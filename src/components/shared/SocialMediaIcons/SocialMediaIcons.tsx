import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition, faFacebook, faInstagram, faTwitter, faGoogle, faPinterest,
  faSnapchat, faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import CONSTANTS from 'src/constants/common';

const faGoogleDisplay = {
  prefix: 'fab' as any,
  iconName: 'google-display' as any,
  icon: [
    2428.1, 2428.1, [], 'e001',
    `
      M1730.6,949.3c142.5-86.5,328.1-41.1,414.5,101.4c86.5,142.5,41.1,328.1-101.4,414.5
      c-3.8,2.3-7.6,4.5-11.4,6.6L460.2,2377.1c-142.5,86.5-328.1,41.1-414.6-101.4c-86.5-142.5-41.1-328.1,101.4-414.6
      c3.8-2.3,7.6-4.5,11.4-6.6L1730.6,949.3z
      M601,303.7C601.7,137.4,467.4,1.9,301.1,1.2c-21.4-0.1-42.7,2.1-63.7,6.5C96.5,42.3-2,169.5,0,314.7v1798.1
      l600.4,10.9L601,303.7z
      M1737.4,1472.9c145.3,75.3,324.1,27.1,411.9-111.1c84.4-142,37.7-325.6-104.3-410c-1.1-0.6-2.1-1.2-3.2-1.9
      L459.2,43C318.3-42.1,135,3.1,49.8,144c-2.1,3.5-4.2,7.1-6.2,10.7C-40,297.8,8.2,481.7,151.3,565.4c1,0.6,2,1.1,3,1.7
      L1737.4,1472.9z
    `
  ]
} as IconDefinition;

const faTiktok = {
  prefix: 'fab' as any,
  iconName: 'tiktok' as any,
  icon: [
    24, 24, [], 'e001',
    `
      M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03
      c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31
      1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9
      1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11
      1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66
      2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z
    `
  ]
} as IconDefinition;

const ICONS = {
  [CONSTANTS.MEDIA_TYPES.FACEBOOK]: faFacebook,
  [CONSTANTS.MEDIA_TYPES.INSTAGRAM]: faInstagram,
  [CONSTANTS.MEDIA_TYPES.TWITTER]: faTwitter,
  [CONSTANTS.MEDIA_TYPES.GOOGLE_SEARCH]: faGoogle,
  [CONSTANTS.MEDIA_TYPES.GOOGLE_DISPLAY]: faGoogleDisplay,
  [CONSTANTS.MEDIA_TYPES.PINTEREST]: faPinterest,
  [CONSTANTS.MEDIA_TYPES.SNAPCHAT]: faSnapchat,
  [CONSTANTS.MEDIA_TYPES.LINKEDIN]: faLinkedin,
  [CONSTANTS.MEDIA_TYPES.TIKTOK]: faTiktok
};

type SocialMediaIconsProps = {
  icon: string;
};

export const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ icon }: SocialMediaIconsProps) => {
  return (
    <FontAwesomeIcon icon={ICONS[icon]}/>
  );
};

export default SocialMediaIcons;
