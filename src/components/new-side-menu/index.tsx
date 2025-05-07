import { SideMenu } from '@/components/side-menu';
import { useMenus } from '@/hook/menus-provider';

import { StyledSideMenuWrapper } from './style';

function NewSideMenu() {
  const { isOpen } = useMenus();

  return (
    <StyledSideMenuWrapper open={!isOpen}>
      <SideMenu />
    </StyledSideMenuWrapper>
  );
}

export default NewSideMenu;
