/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

import { Text } from '@/components/Text';
import { useMenus } from '@/hook/menus-provider';
import { MenuItem, MenuType, RotaRedirect } from '@/types/menus';

import { HIRED_PREFIX, makeAccordionID, MORE_PREFIX } from '../utils';

import { AccordionHeader } from './accordion-header';
import { AccordionSubMenuItems } from './accordion-sub-menu-items';
import {
  AccordionBody,
  AccordionItemWrapper,
  AccordionSectionTitle,
  AccordionWrapper,
} from './styles';

export function AccordionMenuItems({
  open,
  items,
  selectedItem,
  variant = 'hired',
  sectionTitle,
}: {
  open?: boolean;
  items?: MenuType[];
  selectedItem: string;
  sectionTitle: string;
  variant: 'hired' | 'more';
}) {
  const {
    findParentItemByMenuTypeArray,
    parentMenuTypeItem,
    activeRoute,
    isMatchRoute,
  } = useMenus();

  const [isParentParam, setIsParentParam] = useState(false);

  useEffect(() => {
    if (!items) return;
    findParentItemByMenuTypeArray(items, variant === 'more');
  }, [items]);

  const mappedVariant = {
    hired: { objectKey: 'itensContratados', prefix: HIRED_PREFIX } as const,
    more: { objectKey: 'contrateMais', prefix: MORE_PREFIX } as const,
  };

  const checkRouteMatch = (itemsMenu?: MenuItem[]) => {
    itemsMenu?.forEach(item => {
      if (item) {
        if (item.itens?.length) {
          item.itens?.forEach(itemSub => {
            if (itemSub && isMatchRoute(itemSub.rota as RotaRedirect)) {
              setIsParentParam(true);
            }
          });
        } else if (isMatchRoute(item.rota as RotaRedirect)) {
          setIsParentParam(true);
        }
      }
    });
  };

  useEffect(() => {
    if (parentMenuTypeItem && activeRoute) {
      setIsParentParam(false);
      checkRouteMatch(parentMenuTypeItem[mappedVariant[variant].objectKey]);
    }
  }, [parentMenuTypeItem, activeRoute]);

  return (
    <AccordionWrapper>
      <AccordionSectionTitle open={open}>
        <Text style={{ color: '#798286' }}>{sectionTitle}</Text>
      </AccordionSectionTitle>

      {items?.map((item, index) => {
        const accordionID = makeAccordionID(
          mappedVariant[variant].prefix,
          item.titulo!,
          index
        );

        const initialEntered = accordionID === selectedItem;
        const subItems = item[mappedVariant[variant].objectKey];

        const isAction =
          item.titulo === parentMenuTypeItem?.titulo && isParentParam;
        return (
          <AccordionItemWrapper
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
            <AccordionItem
              buttonProps={{
                id: accordionID,
              }}
              key={item.titulo}
              itemKey={accordionID}
              initialEntered={initialEntered}
              header={({ state }) =>
                AccordionHeader({
                  state,
                  item,
                })
              }
            >
              <AccordionBody>
                <Accordion key={item.titulo}>
                  {!!subItems?.length &&
                    subItems.map(subMenu => {
                      if (subMenu.itemHabilitado) {
                        return (
                          <AccordionSubMenuItems
                            key={subMenu.titulo}
                            subMenuItems={subMenu}
                            isContrateMais={variant === 'more'}
                          />
                        );
                      }
                      return null;
                    })}
                </Accordion>
              </AccordionBody>
            </AccordionItem>
          </AccordionItemWrapper>
        );
      })}
    </AccordionWrapper>
  );
}
