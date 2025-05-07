/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';

import { getIconSource } from '@/hook/menus-provider';

import * as Styled from './style';

const Icon: FC<{ icon: string }> = ({ icon }) => (
  <Styled.Wrapper>
    <img
      src={getIconSource && (getIconSource(icon) as unknown as string)}
      alt={icon}
    />
  </Styled.Wrapper>
);

export default Icon;
