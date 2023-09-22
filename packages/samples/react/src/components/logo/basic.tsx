import React, { FC } from 'react';

import { Bundesministerium } from '@public-ui/components';
import { KolLogo } from '@public-ui/react';

export const LogoBasic: FC = () => <KolLogo _org={Bundesministerium['Die Bundesregierung']} style={{ width: 300 }} />;
