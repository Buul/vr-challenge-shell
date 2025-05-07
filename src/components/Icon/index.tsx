/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';

import { getIconSource } from '@/hook/menus-provider';

import * as Styled from './style';

const Icon: FC<{ icon: string; onClick?: any }> = ({ icon, onClick }) => (
  <Styled.Wrapper onClick={onClick}>
    <img
      src={getIconSource && (getIconSource(icon) as unknown as string)}
      alt={icon}
    />
  </Styled.Wrapper>
);

export default Icon;
