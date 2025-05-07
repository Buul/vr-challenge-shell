/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

import externalLink from '@/assets/$icon-externalLink.svg';
import { Text } from '@/components/Text';
import { getIconSource, useMenus } from '@/hook/menus-provider';
import { RedirectParams, useRedirect } from '@/hook/use-redirect';
import { MenuItem, RotaRedirect } from '@/types/menus';

import { IconButton } from '../styles.shared';

import { MenuLink, MenuLinkBody, MenuLinkHeader } from './styles';

type MenuItemProps = {
  title: string;
  subTitle?: string;
  mode?: 'short' | 'default';
  iconProps: Pick<any, 'color' | 'icon'>;
  navigate?: {
    redirect?: RedirectParams['redirecionamento'];
    route?: string | RotaRedirect;
  };
  action?: () => void;
  toggleMenu?: () => void;
  testid?: string;
  itemMenu?: MenuItem;
};

export function MenuItemLink({
  title,
  subTitle,
  mode,
  navigate,
  action,
  iconProps,
  toggleMenu,
  itemMenu,
  testid,
}: MenuItemProps) {
  const { redirect } = useRedirect();
  const [isParentParam, setIsParentParam] = useState(false);
  const { findParentItem, isActiveRoute, activeRoute, parentItem } = useMenus();

  useEffect(() => {
    if (activeRoute && itemMenu && findParentItem) {
      findParentItem(itemMenu, activeRoute);
    }
  }, [itemMenu, activeRoute, findParentItem]);

  const checkRoute = (rota: RotaRedirect) => {
    if (
      rota.pathContratado === activeRoute ||
      rota.pathContrateMais === activeRoute
    ) {
      setIsParentParam(true);
    }
  };

  useEffect(() => {
    if (parentItem && activeRoute) {
      setIsParentParam(false);
      parentItem.itens?.forEach(item => {
        if (item) {
          checkRoute(item.rota as RotaRedirect);
        }
      });
    }
  }, [parentItem, activeRoute]);

  const handleRedirectClick = () => {
    if (action) {
      action();
    } else if (navigate) {
      redirect({
        hasToken: false,
        rota: navigate?.route,
        redirecionamento: navigate?.redirect,
      });
    }

    if (mode === 'short' && itemMenu?.itens && itemMenu?.itens?.length > 0) {
      toggleMenu?.();
    }
  };

  const route = navigate?.route as RotaRedirect;

  const isActive =
    itemMenu?.itens && itemMenu?.itens?.length > 0
      ? itemMenu?.titulo === parentItem?.titulo && isParentParam
      : isActiveRoute(route?.pathContrateMais as string);
  return (
    <>
      {mode === 'short' && (
        <IconButton
          onClick={handleRedirectClick}
          active={isActive}
          data-testid={testid ? `toggle-${testid}` : 'toggle-menu-link'}
        >
          <img
            src={
              getIconSource &&
              (getIconSource(iconProps?.icon) as unknown as string)
            }
            alt={title}
          />
        </IconButton>
      )}
      <MenuLink
        shortMode={mode === 'short'}
        active={isActive}
        title={title}
        onClick={handleRedirectClick}
        data-testid={testid || 'menu-link'}
      >
        <MenuLinkHeader>
          <img
            src={
              getIconSource &&
              (getIconSource(iconProps?.icon) as unknown as string)
            }
            alt={title}
          />

          {subTitle ? (
            <MenuLinkBody>
              <Text>{title}</Text>
              <p>{subTitle}</p>
            </MenuLinkBody>
          ) : (
            <Text>{title}</Text>
          )}
        </MenuLinkHeader>
        {navigate?.redirect?.url && (
          <img
            src={externalLink as unknown as string}
            alt="Ícone de link externo"
          />
        )}
      </MenuLink>
    </>
  );
}
