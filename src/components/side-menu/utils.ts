import { RedirectParams } from '@/hook/use-redirect';
import { MenuItem } from '@/types/menus';

export const handleSideMenuNavigationClick = ({
  item,
  isContrateMais,
  redirect,
}: {
  item: MenuItem;
  isContrateMais: boolean;
  redirect: (props: RedirectParams) => Promise<void>;
}): void => {
  redirect({
    hasToken: true,
    rota: item.rota,
    redirecionamento: item.redirecionamento,
    isContrateMais,
  });
};
