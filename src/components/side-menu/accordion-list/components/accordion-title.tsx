/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

import Icon from '@/components/Icon';
import { handleSideMenuNavigationClick } from '@/components/side-menu/utils';
import { Text } from '@/components/Text';
import { useMenus } from '@/hook/menus-provider';
import { useRedirect } from '@/hook/use-redirect';
import { Item, RotaRedirect, Subitem } from '@/types/menus';

import { AccordionHeader } from './accordion-header';
import {
  AccordionBody,
  AccordionTitleStyledLink,
  AccordionWrapper,
} from './styles';

interface AccordionTitleProps extends Omit<ComponentProps<'a'>, 'ref'> {
  icon?: {
    name: any;
    color: any;
  };
  subitens?: Subitem[];
  subMenu?: Item;
  isContrateMais?: boolean;
}

export function AccordionTitleLink({
  icon,
  isContrateMais,
  ...props
}: AccordionTitleProps) {
  const { redirect } = useRedirect();
  const { isActiveRoute } = useMenus();
  const rota = props?.subMenu?.rota as RotaRedirect;
  return (
    <>
      {props?.title && !props?.subitens?.length && (
        <AccordionTitleStyledLink
          key={props.title}
          active={isActiveRoute(
            isContrateMais
              ? rota.pathContrateMais
              : (rota.pathContratado as string)
          )}
          {...props}
        >
          {icon && <Icon icon={icon.name} />}
          <Text>{props.title}</Text>
        </AccordionTitleStyledLink>
      )}

      {props?.subitens && props?.subitens?.length > 0 && (
        <AccordionWrapper>
          <AccordionBody>
            <Accordion>
              {props.subitens.map((subitem: Subitem) => (
                <AccordionItem
                  header={({ state }) =>
                    AccordionHeader({
                      state,
                      item: { titulo: props.title },
                      renderIcon: false,
                    })
                  }
                >
                  <AccordionBody>
                    <AccordionTitleStyledLink
                      onClick={() => {
                        handleSideMenuNavigationClick({
                          redirect,
                          item: subitem,
                          isContrateMais: false,
                        });
                      }}
                    >
                      <Text>{subitem.titulo}</Text>
                    </AccordionTitleStyledLink>
                  </AccordionBody>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionBody>
        </AccordionWrapper>
      )}
    </>
  );
}
