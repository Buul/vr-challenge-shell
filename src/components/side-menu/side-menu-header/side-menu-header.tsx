/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  ControlledAccordion,
  useAccordionProvider,
} from '@szhsin/react-accordion';

import { useMenus } from '@/hook/menus-provider';
import { MenuItem, MenuType, RotaRedirect } from '@/types/menus';

import { AccordionHeader } from '../accordion-list/components/accordion-header';
import { AccordionSubMenuItems } from '../accordion-list/components/accordion-sub-menu-items';
import {
  AccordionBody,
  AccordionItemWrapper,
  AccordionWrapper,
} from '../accordion-list/components/styles';
import { makeAccordionID } from '../accordion-list/utils';
import { SideMenuHeader } from '../styles';
import { ToggleMenu as ToggleMenuComponent } from '../toggle-menu/toggle-menu';

type Props = {
  isOpen: boolean;
  itensFixos?: MenuItem[];
  mainAccordionProviderValue: ReturnType<typeof useAccordionProvider>;
  toggleMenu?: () => void;
};

export function SideMenuHeaderComponent({
  isOpen,
  itensFixos,
  mainAccordionProviderValue,
  toggleMenu,
}: Props) {
  const { activeRoute } = useMenus();
  const [isParentParam, setIsParentParam] = useState(false);
  const [parentMenuTypeItem, setParentMenuTypeItem] = useState<MenuType>();

  const checkMatchRouteBySubItem = (subItem?: MenuItem) => {
    if (subItem?.itens) {
      subItem?.itens.forEach(subItemItem => {
        const rota = subItemItem.rota as RotaRedirect;
        if (
          rota &&
          (rota.pathContratado === activeRoute ||
            rota.pathContrateMais === activeRoute)
        ) {
          setIsParentParam(true);
          setParentMenuTypeItem(subItem);
        }
      });
    }
  };

  useEffect(() => {
    setIsParentParam(false);
    if (itensFixos && activeRoute) {
      itensFixos.forEach(item => {
        if (item?.itens?.length) {
          checkMatchRouteBySubItem(item);
        } else {
          const rota = item.rota as RotaRedirect;
          if (
            rota &&
            (rota.pathContratado === activeRoute ||
              rota.pathContrateMais === activeRoute)
          ) {
            setIsParentParam(true);
            setParentMenuTypeItem(item);
          }
        }
      });
    }
  }, [itensFixos, activeRoute]);

  return (
    <SideMenuHeader open={isOpen}>
      {itensFixos?.map((item, index) => {
        if (item?.itens?.length === 0) {
          return <ToggleMenuComponent open={isOpen} item={item} />;
        }
        const accordionID = makeAccordionID('fixed', item.titulo!, index);
        const isAction =
          item.titulo === parentMenuTypeItem?.titulo && isParentParam;

        return (
          <>
            <AccordionItemWrapper
              shortMode={isOpen === false}
              css={
                (isAction && {
                  '& .szh-accordion__item-heading': {
                    [`& #${accordionID}`]: {
                      '&[aria-expanded=false]': {
                        backgroundColor: '$primaryLight2',
                      },
                    },
                  },
                }) ||
                {}
              }
            >
              <AccordionWrapper>
                <ControlledAccordion providerValue={mainAccordionProviderValue}>
                  <AccordionItem
                    buttonProps={{
                      id: accordionID,
                    }}
                    key={item.titulo}
                    itemKey={accordionID}
                    header={({ state }) =>
                      AccordionHeader({
                        state,
                        item,
                      })
                    }
                  >
                    <AccordionBody>
                      <Accordion key={item.titulo}>
                        {item?.itens?.map(subMenu => {
                          if (subMenu.itemHabilitado) {
                            return (
                              <AccordionSubMenuItems
                                key={subMenu.titulo}
                                subMenuItems={subMenu}
                                isContrateMais
                              />
                            );
                          }
                          return null;
                        })}
                      </Accordion>
                    </AccordionBody>
                  </AccordionItem>
                </ControlledAccordion>
              </AccordionWrapper>
            </AccordionItemWrapper>
            {!isOpen && (
              <ToggleMenuComponent
                open={isOpen}
                item={item}
                toggleMenu={toggleMenu}
              />
            )}
          </>
        );
      })}
    </SideMenuHeader>
  );
}
