/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Text } from '@/components/Text';
import { MenuItem } from '@/types/menus';

import { AccordionSectionTitle } from '../accordion-list/components/styles';
import { MenuItemLink } from '../menu-item/menu-item';

import { MenuItemsListContent, MenuItemsListWrapper } from './styles';

type MenuItemsListProps = {
  open?: boolean;
  items: MenuItem[];
  toggleMenu?: () => void;
};

export function MenuItemsList({ items, open, toggleMenu }: MenuItemsListProps) {
  return (
    <MenuItemsListWrapper open={open} data-testid="menu-items-list-wrapper">
      <AccordionSectionTitle>
        <Text
          style={{
            color: '#798286',
            fontSize: open ? '14px' : '8px',
            textAlign: open ? 'left' : 'center',
          }}
        >
          Comercial
        </Text>
      </AccordionSectionTitle>
      <MenuItemsListContent open={open} data-testid="menu-item-link">
        {items?.map(
          saibaMais =>
            saibaMais.itemHabilitado && (
              <MenuItemLink
                key={saibaMais.titulo}
                toggleMenu={toggleMenu}
                title={saibaMais.titulo!}
                mode={open ? 'default' : 'short'}
                navigate={{
                  route: saibaMais?.rota,
                  redirect: saibaMais?.redirecionamento,
                }}
                iconProps={{
                  icon: saibaMais.icone!.nome,
                  color: saibaMais.icone!.cor,
                }}
              />
            )
        )}
      </MenuItemsListContent>
    </MenuItemsListWrapper>
  );
}
