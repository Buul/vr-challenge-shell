import { useEffect, useState } from 'react';
import {
  ControlledAccordion,
  useAccordionProvider,
} from '@szhsin/react-accordion';

import { Menu } from '@/types/menus';

import { AccordionMenuItems } from './components/accordion-menu-items';
import { SortItems } from './components/accordion-sort-items';
import { MenuDefaultWrapper, MenuWrapper } from './styles';
import { HIRED_PREFIX, MORE_PREFIX } from './utils';

type AccordionListProps = {
  items?: Menu['menu'];
  mode?: 'short' | 'default';
  open?: boolean;
  toggleSideMenu?: () => void;
  isJIU?: boolean;
  mainAccordionProviderValue?: ReturnType<typeof useAccordionProvider>;
};

export function AccordionList({
  items,
  mode,
  open,
  toggleSideMenu,
  mainAccordionProviderValue,
  isJIU = false,
}: AccordionListProps) {
  const hiredItems = items?.filter(item => !!item.itensContratados?.length);
  const moreItems = items?.filter(item => !!item.contrateMais?.length);
  const mainAccordionProvider = useAccordionProvider();

  const [selectedItem, setSelectedItem] = useState<string>('');

  useEffect(() => {
    setSelectedItem(current => (!open ? '' : current));
  }, [open]);

  return (
    <>
      {mode === 'short' && (
        <MenuWrapper open={open}>
          <SortItems
            variant="hired"
            open={open}
            items={hiredItems}
            sectionTitle="Operacional"
            toggleSideMenu={toggleSideMenu}
            setSelectedItem={setSelectedItem}
            prefixSelectorItems={HIRED_PREFIX}
          />

          <SortItems
            variant="more"
            open={open}
            items={moreItems}
            sectionTitle="Middle"
            toggleSideMenu={toggleSideMenu}
            setSelectedItem={setSelectedItem}
            prefixSelectorItems={MORE_PREFIX}
          />
        </MenuWrapper>
      )}
      <MenuDefaultWrapper shortMode={mode === 'short'}>
        <ControlledAccordion
          providerValue={mainAccordionProviderValue || mainAccordionProvider}
        >
          <MenuWrapper open={open}>
            {!isJIU && (
              <AccordionMenuItems
                open={open}
                variant="hired"
                items={hiredItems}
                selectedItem={selectedItem}
                sectionTitle="Operacional"
              />
            )}
            {!isJIU && (
              <AccordionMenuItems
                open={open}
                variant="more"
                items={moreItems}
                selectedItem={selectedItem}
                sectionTitle="Middle"
              />
            )}
          </MenuWrapper>
        </ControlledAccordion>
      </MenuDefaultWrapper>
    </>
  );
}
