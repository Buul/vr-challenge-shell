/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { SideMenuLoadingContent, SideMenuLoadingWrapper } from './style';

type SideMenuLoadingProps = {
  rows?: number;
};

export function SideMenuLoading({ rows = 6 }: SideMenuLoadingProps) {
  const rowsList = new Array(rows).fill('row');

  return (
    <SideMenuLoadingWrapper>
      {rowsList.map((row, index) => (
        <SideMenuLoadingContent key={`${row}-${index.toString()}`}>
          <div />
        </SideMenuLoadingContent>
      ))}
    </SideMenuLoadingWrapper>
  );
}
