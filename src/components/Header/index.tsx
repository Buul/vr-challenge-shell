/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable simple-import-sort/imports */
import { FC, useEffect, useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';

import LogoGestora from '@/assets/logo-gestora.svg';

import { TUserInfo } from '@/presentation/Login/service/types';
import { logout, validateToken } from '@/presentation/Login/service';
import * as Styled from './style';
import { Avatar } from '../Avatar';
import Icon from '../Icon';

const Header: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [userInfo, setUserInfo] = useState<TUserInfo>();

  const getUserInfo = async () => {
    const { shortname, username } = await validateToken();

    setUserInfo({
      shortname,
      username,
    });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Styled.Wrapper>
      <img src={LogoGestora as unknown as string} alt="logo-gestora" />
      <Styled.MenuWrapper>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Styled.AvatarWrapper>
                <Avatar name={userInfo?.shortname} />
              </Styled.AvatarWrapper>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Styled.TooltipContent side="bottom" sideOffset={5}>
                <Styled.InfoWrapper>
                  <Styled.Greetings>Olá,</Styled.Greetings>
                  <Styled.Title>{userInfo?.shortname}</Styled.Title>
                  <Styled.Registration>
                    <b>Matícula:</b> {userInfo?.username}
                  </Styled.Registration>
                  <Styled.TooltipArrow />
                </Styled.InfoWrapper>
              </Styled.TooltipContent>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
        <Styled.LogoutWrapper>
          <Styled.LinkButton
            style={{ marginLeft: 20, marginRight: 0 }}
            onClick={logout}
          >
            Sair
          </Styled.LinkButton>
        </Styled.LogoutWrapper>
        <Styled.MenuButton>
          <Icon icon="icon-Sandwich-menu" onClick={() => setShowMenu(true)} />
        </Styled.MenuButton>
      </Styled.MenuWrapper>
    </Styled.Wrapper>
  );
};

export default Header;
