import { useCallback, useEffect } from 'react';
import { useAccordionProvider } from '@szhsin/react-accordion';

import iconLeftArrow from '@/assets/$icon-leftArrow.svg';
import iconRightArrow from '@/assets/$icon-rightArrow.svg';
import { useMenus } from '@/hook/menus-provider';

import { MenuItemsList } from './menu-items-list/menu-items-list';
import { SideMenuHeaderComponent } from './side-menu-header/side-menu-header';
import { AccordionList } from './accordion-list';
import { ExpandButton, SideMenuBody, SideMenuContainer } from './styles';

export function SideMenu() {
  const {
    isOpen,
    toggleMenu,
    productMenu,
    SELECTED_ACCORDION_SELECTOR,
    FIRST_MENU_ELEMENT_SELECTOR,
  } = useMenus();

  const mainAccordionProviderValue = useAccordionProvider();

  const { saibaMais: learnMore } =
    productMenu?.filter(menu => !!menu.saibaMais?.length)?.[0] || {};

  const { itensFixos } =
    productMenu?.filter(menu => !!menu.itensFixos?.length)?.[0] || {};

  const controlPageScroll = useCallback(() => {
    const root = document.getElementById('root');
    root?.setAttribute(
      'style',
      isOpen ? 'overflow: hidden;' : 'overflow: auto;'
    );
  }, [isOpen]);

  const selectedAccordionIntoView = useCallback(() => {
    if (!isOpen) {
      const firstElement = document.querySelector(FIRST_MENU_ELEMENT_SELECTOR);
      firstElement?.scrollIntoView();
      return;
    }

    const selectedElement = document.querySelector(SELECTED_ACCORDION_SELECTOR);
    selectedElement?.scrollIntoView();
  }, [isOpen, SELECTED_ACCORDION_SELECTOR, FIRST_MENU_ELEMENT_SELECTOR]);

  useEffect(() => controlPageScroll(), [controlPageScroll]);
  useEffect(() => selectedAccordionIntoView(), [selectedAccordionIntoView]);

  return (
    <>
      <ExpandButton onClick={toggleMenu}>
        {(isOpen && (
          <img
            src={iconLeftArrow as unknown as string}
            alt="ícone de uma seta apontando para esquerda"
          />
        )) || (
          <img
            src={iconRightArrow as unknown as string}
            alt="ícone de uma seta apontando para direita"
          />
        )}
      </ExpandButton>
      <SideMenuContainer open={isOpen}>
        <SideMenuHeaderComponent
          isOpen={isOpen}
          itensFixos={itensFixos}
          mainAccordionProviderValue={mainAccordionProviderValue}
          toggleMenu={toggleMenu}
        />

        <SideMenuBody open={isOpen} data-id="menu">
          <AccordionList
            mainAccordionProviderValue={mainAccordionProviderValue}
            open={isOpen}
            items={productMenu}
            toggleSideMenu={toggleMenu}
            mode={isOpen ? 'default' : 'short'}
          />

          {!!learnMore?.length && (
            <MenuItemsList
              open={isOpen}
              items={learnMore}
              toggleMenu={toggleMenu}
            />
          )}
        </SideMenuBody>
      </SideMenuContainer>
    </>
  );
}
