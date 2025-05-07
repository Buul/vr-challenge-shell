/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MenuItem } from '@/types/menus';

import { MenuItemLink } from '../menu-item/menu-item';

type ToggleMenuProps = {
  open?: boolean;
  item: MenuItem;
  toggleMenu?: () => void;
};

export function ToggleMenu({ open, item, toggleMenu }: ToggleMenuProps) {
  return (
    <MenuItemLink
      itemMenu={item}
      toggleMenu={toggleMenu}
      title={item.titulo!}
      mode={open ? 'default' : 'short'}
      navigate={{
        route: item?.rota,
        redirect: item?.redirecionamento,
      }}
      iconProps={{
        icon: item.icone!.nome,
        color: item.icone!.cor,
      }}
    />
  );
}
