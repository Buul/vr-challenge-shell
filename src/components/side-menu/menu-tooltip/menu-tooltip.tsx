/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { cloneElement, isValidElement, ReactElement } from 'react';
import { PlacesType, Tooltip } from 'react-tooltip';

interface MenuTooltipProps {
  text: string;
  selector: string;
  place?: PlacesType;
  children: ReactElement<{ 'data-tooltip-selector': string }>;
}

export function MenuTooltip({
  text,
  selector,
  place = 'right',
  children,
}: MenuTooltipProps) {
  const clonedChild = !isValidElement(children)
    ? undefined
    : cloneElement(children, {
        'data-tooltip-selector': selector,
      });

  return (
    <>
      {clonedChild}
      <Tooltip
        place={place}
        anchorSelect={`[data-tooltip-selector=${selector}]`}
      >
        {text}
      </Tooltip>
    </>
  );
}
