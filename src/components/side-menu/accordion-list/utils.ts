import iconBlog from '@/assets/$icon-blog.svg';
import iconChevronDown from '@/assets/$icon-chevronDown.svg';
import iconChevronUp from '@/assets/$icon-chevronUp.svg';
import iconContract from '@/assets/$icon-contract.svg';
import iconHome from '@/assets/$icon-home.svg';
import home1 from '@/assets/$icon-home1.svg';
import location from '@/assets/$icon-location.svg';
import iconPeopleGroup from '@/assets/$icon-peopleGroup.svg';
import iconPlayer from '@/assets/$icon-player.svg';
import iconProgramaRecompensas from '@/assets/$icon-programa-recompensas.svg';
import iconQuestion from '@/assets/$icon-question.svg';
import settingGear from '@/assets/$icon-settingGear.svg';
import iconSolucoesFinanceiras from '@/assets/$icon-solucoes-financeiras.svg';
import iconTrainning from '@/assets/$icon-trainning.svg';
import iconUserSetting from '@/assets/user-setting.svg';

export const HIRED_PREFIX = 'hired';
export const MORE_PREFIX = 'more';

export const makeAccordionID = (
  prefix: string,
  title: string,
  random: string | number
) => `${prefix}-${title?.toLocaleLowerCase()?.replaceAll(' ', '-')}-${random}`;

export const iconsMenuLocal = {
  SOLUCOES_FINANCEIRAS: iconSolucoesFinanceiras,
  PROGRAMA_DE_RECOMPENSAS: iconProgramaRecompensas,
  ICON_BLOG: iconBlog,
  USER_SETTING: iconUserSetting,
  ICON_TRAINNING: iconTrainning,
  LOCATION: location,
  HOME: iconHome,
  PLAYER: iconPlayer,
  'HOME-1': home1,
  QUESTION: iconQuestion,
  'PEOPLE-GROUP': iconPeopleGroup,
  'SETTING-GEAR': settingGear,
  CONTRACT: iconContract,
  'CHEVRON-TOP': iconChevronUp,
  'CHEVRON-BOTTOM': iconChevronDown,
};
