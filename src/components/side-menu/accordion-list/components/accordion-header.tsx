/* eslint-disable @typescript-eslint/no-explicit-any */
import Icon from '@/components/Icon';
import { Text } from '@/components/Text';
import { getIconSource } from '@/hook/menus-provider';
import { MenuType } from '@/types/menus';

import { AccordionHeaderContent, AccordionIcon } from './styles';

type AccordionHeaderProps = {
  state?: Readonly<{
    isEnter: boolean;
    isMounted: boolean;
    isResolved: boolean;
  }>;
  item: MenuType;
  renderIcon?: boolean;
};

export function AccordionHeader({
  state,
  item,
  renderIcon = true,
}: AccordionHeaderProps) {
  const openCloseIcon = state?.isEnter ? 'chevron-top' : 'chevron-bottom';
  return (
    <>
      <AccordionHeaderContent>
        {renderIcon && item?.icone?.nome && (
          <AccordionIcon>
            <img
              src={
                getIconSource &&
                (getIconSource(item?.icone?.nome) as unknown as string)
              }
              alt={item.titulo}
              height={24}
              width={24}
            />
          </AccordionIcon>
        )}
        <Text>{item.titulo}</Text>
      </AccordionHeaderContent>
      {state && (
        <AccordionIcon>
          <Icon icon={openCloseIcon} />
        </AccordionIcon>
      )}
    </>
  );
}
