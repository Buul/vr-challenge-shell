import { useEffect, useState } from 'react';
import { AccordionItem } from '@szhsin/react-accordion';

import { handleSideMenuNavigationClick } from '@/components/side-menu/utils';
import { useMenus } from '@/hook/menus-provider';
import { useRedirect } from '@/hook/use-redirect';
import { MenuItem, RotaRedirect } from '@/types/menus';

import { AccordionHeader } from './accordion-header';
import { AccordionTitleLink } from './accordion-title';
import { AccordionBody, AccordionItemWrapper } from './styles';

type AccordionSubMenuItemsProps = {
  subMenuItems: MenuItem;
  isContrateMais?: boolean;
};

export function AccordionSubMenuItems({
  subMenuItems,
  isContrateMais = false,
}: AccordionSubMenuItemsProps) {
  const { toggleMenu, isOpen } = useMenus();
  const { redirect } = useRedirect();
  const { findParentItem, parentItem, activeRoute } = useMenus();
  const [isParentParam, setIsParentParam] = useState(false);

  useEffect(() => {
    if (activeRoute && subMenuItems) {
      findParentItem(subMenuItems, activeRoute);
    }
  }, [subMenuItems, activeRoute]);

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

  if (!subMenuItems?.itens?.length)
    return (
      <AccordionTitleLink
        subMenu={subMenuItems}
        key={subMenuItems.titulo}
        title={subMenuItems.titulo}
        data-testid="accordion-title"
        isContrateMais={isContrateMais}
        onClick={() => {
          handleSideMenuNavigationClick({
            redirect,
            item: subMenuItems,
            isContrateMais,
          });
          if (!isOpen) {
            toggleMenu();
          }
        }}
      />
    );

  return (
    <AccordionItemWrapper
      activeSub={subMenuItems.titulo === parentItem?.titulo && isParentParam}
    >
      <AccordionItem
        buttonProps={{
          id: subMenuItems.titulo,
        }}
        key={subMenuItems.titulo}
        header={({ state }) =>
          AccordionHeader({
            state,
            item: subMenuItems,
            renderIcon: false,
          })
        }
      >
        <AccordionBody>
          {subMenuItems.itens.map(subMenu => (
            <AccordionTitleLink
              subMenu={subMenu}
              key={subMenu.titulo}
              title={subMenu.titulo}
              isContrateMais={isContrateMais}
              data-testid="accordion-title"
              subitens={subMenu?.subItens}
              onClick={() => {
                handleSideMenuNavigationClick({
                  redirect,
                  item: subMenu,
                  isContrateMais: false,
                });

                if (!isOpen) {
                  toggleMenu();
                }
              }}
            />
          ))}
        </AccordionBody>
      </AccordionItem>
    </AccordionItemWrapper>
  );
}
