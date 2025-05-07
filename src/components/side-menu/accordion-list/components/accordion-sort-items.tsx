/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Text } from '@/components/Text';
import { getIconSource, useMenus } from '@/hook/menus-provider';
import { MenuItem, MenuType, RotaRedirect } from '@/types/menus';

import { IconButton } from '../../styles.shared';
import { HIRED_PREFIX, makeAccordionID, MORE_PREFIX } from '../utils';

import {
  AccordionSectionTitle,
  ClosedItemContent,
  ClosedMenuSection,
} from './styles';

export function SortItems({
  sectionTitle,
  open,
  items,
  toggleSideMenu,
  setSelectedItem,
  prefixSelectorItems,
  variant,
}: {
  open?: boolean;
  items?: MenuType[];
  sectionTitle: string;
  toggleSideMenu?: () => void;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  prefixSelectorItems: string;
  variant: 'hired' | 'more';
}) {
  const { parentMenuTypeItem, activeRoute, isMatchRoute } = useMenus();
  const [isParentParam, setIsParentParam] = useState(false);
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
    <ClosedMenuSection>
      <AccordionSectionTitle open={open}>
        <Text style={{ color: '#798286' }}>{sectionTitle}</Text>
      </AccordionSectionTitle>
      <ClosedItemContent>
        {items?.map((item, index) => {
          const accordionID = makeAccordionID(
            prefixSelectorItems,
            item.titulo!,
            index
          );

          const isActive =
            item.titulo === parentMenuTypeItem?.titulo && isParentParam;

          return (
            <IconButton
              active={isActive}
              onClick={() => {
                toggleSideMenu?.();
                setSelectedItem(accordionID);
              }}
              data-testid="accordion-item"
            >
              <img
                src={
                  getIconSource &&
                  (getIconSource(item?.icone?.nome) as unknown as string)
                }
                alt={item.titulo}
                height={24}
                width={24}
              />
            </IconButton>
          );
        })}
      </ClosedItemContent>
    </ClosedMenuSection>
  );
}
