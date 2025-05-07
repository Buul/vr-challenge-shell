/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useLocation } from 'react-router-dom';

import { iconsMenuLocal } from '@/components/side-menu/accordion-list/utils';
import {
  ItemBusca,
  MenuItem,
  MenuType,
  RotaRedirect,
  Shortcut,
} from '@/types/menus';

const mock = {
  id: '676ab981207903ff48dcfbec',
  idEmissor: 'PAT',
  versao: '2',
  menu: [
    {
      id: 'f1b0f5c7-5e74-4d94-8f70-89076cb247ce',
      titulo: 'Início',
      rota: '/',
      redirecionamento: {
        url: '',
        urlContrateMais: '',
        novaAba: true,
        destino: '',
        parametros: null,
      },
      tag: 'epr_spe_prod_menu_inicio',
      icone: {
        nome: 'home-1',
        cor: 'neutralVeryDark',
      },
      info: null,
      contrateMais: [],
      itensContratados: [],
      itensFixos: [
        {
          titulo: 'Página Inicial',
          siglaProduto: [],
          rota: {
            pathContrateMais: '/',
            pathContratado: '/',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: [
              'siglaEmissor',
              'token',
              'accessToken',
              'cnpj',
              'refreshToken',
            ],
          },
          tag: '',
          icone: {
            nome: 'home-1',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
          itens: [],
          atalho: {
            novaAba: false,
            isAtalho: false,
          },
        },
        {
          titulo: 'Configurações',
          siglaProduto: [],
          rota: {
            pathContrateMais: '',
            pathContratado: '',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: [],
          },
          tag: '',
          icone: {
            nome: 'setting-gear',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
          itens: [
            {
              titulo: 'Recuperar senha',
              rota: {
                pathContrateMais: '/recuperar-senha',
                pathContratado: '/recuperar-senha',
              },
              redirecionamento: {
                url: '',
                urlContrateMais: '',
                novaAba: false,
                destino: '',
                parametros: [
                  'siglaEmissor',
                  'token',
                  'accessToken',
                  'cnpj',
                  'refreshToken',
                ],
              },
              siglaProduto: null,
              tag: '',
              icone: null,
              itemHabilitado: true,
              atalho: {
                tituloAtalho: 'Cadastro de usuário',
                rota: '',
                urlRedirecionamento: '',
                novaAba: false,
                destino: '',
                tag: '',
                parametros: [
                  'siglaEmissor',
                  'token',
                  'accessToken',
                  'cnpj',
                  'refreshToken',
                ],
                icone: {
                  nome: 'receipt-circle',
                  cor: 'primaryDark',
                },
                isAtalho: false,
              },
              subItens: null,
            },
          ],
          atalho: {
            novaAba: false,
            isAtalho: false,
          },
        },
      ],
    },
    {
      id: '715fb6ec-fde0-4e33-a492-e5402cdcb536',
      titulo: 'Lorem Ipsum',
      rota: '',
      redirecionamento: {
        url: '',
        urlContrateMais: '',
        novaAba: true,
        destino: '',
        parametros: ['siglaEmissor', 'accessToken', 'cnpj'],
      },
      tag: '',
      icone: {
        nome: 'QUESTION',
        cor: 'neutralVeryDark',
      },
      info: {
        titulo: 'Lorem Ipsum',
        descricao:
          'Opções de benefícios aceitas em todo o Brasil para oferecer aos seus trabalhadores.',
      },
      contrateMais: [
        {
          titulo: 'Lorem Ipsum',
          rota: {
            pathContrateMais: '/beneficios',
            pathContratado: '',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: ['siglaEmissor', 'accessToken', 'cnpj'],
          },
          siglaProduto: [
            'VBA',
            'AXN',
            'VCA',
            'NAT',
            'COM',
            'AXA',
            '',
            'MBF',
            'MBP',
          ],
          tag: '',
          icone: {
            nome: 'fast-food',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
        },
        {
          titulo: 'Lorem Ipsum',
          rota: {
            pathContrateMais: '/beneficios',
            pathContratado: '',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: ['siglaEmissor', 'accessToken', 'cnpj'],
          },
          siglaProduto: ['V', 'ARN', 'FRA', 'RAD', 'AXR'],
          tag: '',
          icone: {
            nome: 'fork-knife',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
        },
        {
          titulo: 'Lorem Ipsum',
          rota: {
            pathContrateMais: '/beneficios',
            pathContratado: '',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: ['siglaEmissor', 'accessToken', 'cnpj'],
          },
          siglaProduto: [
            'M',
            'RXM',
            'MLT',
            'HOM',
            'PRM',
            'AXM',
            'VAM',
            'FXM',
            'BFM',
            'ARA',
            'XAR',
            'VBM',
          ],
          tag: '',
          icone: {
            nome: 'card-front',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
        },
        {
          titulo: 'Lorem Ipsum',
          rota: {
            pathContrateMais: '/beneficios',
            pathContratado: '',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: ['siglaEmissor', 'accessToken', 'cnpj'],
          },
          siglaProduto: ['FLX', 'XRA', 'RRA'],
          tag: '',
          icone: {
            nome: 'card',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
        },
        {
          titulo: 'Lorem Ipsum',
          rota: {
            pathContrateMais: '/beneficios',
            pathContratado: '',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: ['siglaEmissor', 'accessToken', 'cnpj'],
          },
          siglaProduto: ['HOM'],
          tag: '',
          icone: {
            nome: 'home-office',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
        },
        {
          titulo: 'Lorem Ipsum',
          rota: {
            pathContrateMais: '/beneficios',
            pathContratado: '',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: ['siglaEmissor', 'accessToken', 'cnpj'],
          },
          siglaProduto: ['VBV', 'MNT', 'VMB'],
          tag: '',
          icone: {
            nome: 'gas-station',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
        },
        {
          titulo: 'Lorem Ipsum',
          rota: {
            pathContrateMais: '/beneficios',
            pathContratado: '',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: ['siglaEmissor', 'accessToken', 'cnpj'],
          },
          siglaProduto: ['VBT'],
          tag: '',
          icone: {
            nome: 'bus',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
        },
      ],
      itensContratados: [],
      itensFixos: null,
    },
    {
      id: '34af51fe-9d59-4c72-b377-a16b6088263a',
      titulo: 'Mesa',
      rota: '',
      redirecionamento: {
        url: 'https://qaa2.pontomaisweb.com.br:9003/login',
        urlContrateMais: '',
        novaAba: true,
        destino: '',
        parametros: [
          'siglaEmissor',
          'token',
          'accessToken',
          'cnpj',
          'refreshToken',
        ],
      },
      tag: '',
      icone: {
        nome: 'people-group',
        cor: 'neutralVeryDark',
      },
      info: {
        titulo: 'O que é?',
        descricao:
          'Solução completa para simplificar o controle de ponto e gestão de jornada na sua empresa.',
      },
      contrateMais: [],
      itensContratados: [
        {
          titulo: 'Histórico cotas',
          siglaProduto: ['G02', 'PTM'],
          rota: {
            pathContrateMais: '/pendencias',
            pathContratado: '/pendencias',
          },
          redirecionamento: {
            url: null,
            urlContrateMais: '',
            novaAba: false,
            destino: 'continue=ged',
            parametros: [
              'siglaEmissor',
              'token',
              'accessToken',
              'cnpj',
              'refreshToken',
            ],
          },
          tag: '',
          icone: {
            nome: 'documents-box',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
          itens: [],
          atalho: {
            novaAba: false,
            isAtalho: false,
          },
        },
        {
          titulo: 'Ordem',
          siglaProduto: ['G02', 'PTM'],
          rota: {
            pathContrateMais: '/gente',
            pathContratado: '',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: [
              'siglaEmissor',
              'token',
              'accessToken',
              'cnpj',
              'refreshToken',
            ],
          },
          tag: '',
          icone: {
            nome: 'user-plus',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
          itens: [
            {
              titulo: 'Renda fixa',
              rota: {
                pathContrateMais: '/admissao',
                pathContratado: '/admissao',
              },
              redirecionamento: {
                url: '',
                urlContrateMais: '',
                novaAba: false,
                destino: 'continue=admissao',
                parametros: [
                  'siglaEmissor',
                  'token',
                  'accessToken',
                  'cnpj',
                  'refreshToken',
                ],
              },
              siglaProduto: null,
              tag: '',
              icone: null,
              itemHabilitado: true,
              atalho: {
                tituloAtalho: 'Processo de admissão',
                rota: '/admissao',
                urlRedirecionamento: '',
                novaAba: false,
                destino: 'continue=admissao',
                tag: '',
                parametros: [
                  'siglaEmissor',
                  'token',
                  'accessToken',
                  'cnpj',
                  'refreshToken',
                ],
                icone: {
                  nome: 'user-in',
                  cor: 'primaryDark',
                },
                isAtalho: true,
              },
              subItens: null,
            },
            {
              titulo: 'Renda variável',
              rota: {
                pathContrateMais: '/admissao/atualizacao-cadastral',
                pathContratado: '/admissao/atualizacao-cadastral',
              },
              redirecionamento: {
                url: '',
                urlContrateMais: '',
                novaAba: false,
                destino: '',
                parametros: [
                  'siglaEmissor',
                  'token',
                  'accessToken',
                  'cnpj',
                  'refreshToken',
                ],
              },
              siglaProduto: null,
              tag: '',
              icone: null,
              itemHabilitado: true,
              atalho: {
                novaAba: false,
                isAtalho: false,
              },
              subItens: null,
            },
            {
              titulo: 'Empréstimos de Ações',
              rota: {
                pathContrateMais: '/admissao/outros',
                pathContratado: '/admissao/outros',
              },
              redirecionamento: {
                url: '',
                urlContrateMais: '',
                novaAba: false,
                destino: '',
                parametros: [
                  'siglaEmissor',
                  'token',
                  'accessToken',
                  'cnpj',
                  'refreshToken',
                ],
              },
              siglaProduto: null,
              tag: '',
              icone: null,
              itemHabilitado: true,
              atalho: {
                novaAba: false,
                isAtalho: false,
              },
              subItens: null,
            },
            {
              titulo: 'Trades offshore',
              rota: {
                pathContrateMais: '/admissao/contratados',
                pathContratado: '/admissao/contratados',
              },
              redirecionamento: {
                url: '',
                urlContrateMais: '',
                novaAba: false,
                destino: 'continue=admissao',
                parametros: [
                  'siglaEmissor',
                  'token',
                  'accessToken',
                  'cnpj',
                  'refreshToken',
                ],
              },
              siglaProduto: null,
              tag: '',
              icone: null,
              itemHabilitado: true,
              atalho: {
                novaAba: false,
                isAtalho: false,
              },
              subItens: null,
            },
            {
              titulo: 'FOFs',
              rota: {
                pathContrateMais: '/admissao/demitidos',
                pathContratado: '/admissao/demitidos',
              },
              redirecionamento: {
                url: '',
                urlContrateMais: '',
                novaAba: false,
                destino: 'continue=admissao',
                parametros: [
                  'siglaEmissor',
                  'token',
                  'accessToken',
                  'cnpj',
                  'refreshToken',
                ],
              },
              siglaProduto: null,
              tag: '',
              icone: null,
              itemHabilitado: true,
              atalho: {
                novaAba: false,
                isAtalho: false,
              },
              subItens: null,
            },
          ],
          atalho: {
            novaAba: false,
            isAtalho: false,
          },
        },
      ],
      itensFixos: null,
    },
    {
      id: '36e4a2e3-895b-4ad5-8180-1d6592b4c08f',
      titulo: 'Lorem Ipsum',
      rota: '',
      redirecionamento: {
        url: '',
        urlContrateMais: '',
        novaAba: true,
        destino: '',
        parametros: [
          'siglaEmissor',
          'token',
          'accessToken',
          'cnpj',
          'refreshToken',
        ],
      },
      tag: '',
      icone: {
        nome: 'location',
        cor: 'neutralVeryDark',
      },
      info: {
        titulo: 'O que é?',
        descricao:
          'Soluções para sua empresa chegar mais longe feitas pela maior especialista em mobilidade no Brasil.',
      },
      contrateMais: [
        {
          titulo: 'Lorem Ipsum',
          rota: {
            pathContrateMais: '/mobilidade',
            pathContratado: '',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: [
              'siglaEmissor',
              'token',
              'accessToken',
              'cnpj',
              'refreshToken',
            ],
          },
          siglaProduto: ['R', 'AAG', 'AVT', 'ABP'],
          tag: '',
          icone: {
            nome: 'location',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
        },
      ],
      itensContratados: [],
      itensFixos: null,
    },
    {
      id: '255aaf3e-405a-4d8d-a7b4-ced95207d0f0',
      titulo: 'Lorem Ipsum',
      rota: '',
      redirecionamento: {
        url: '',
        urlContrateMais: '',
        novaAba: true,
        destino: '',
        parametros: [
          'siglaEmissor',
          'token',
          'accessToken',
          'cnpj',
          'refreshToken',
        ],
      },
      tag: '',
      icone: {
        nome: 'PROGRAMA_DE_RECOMPENSAS',
        cor: 'neutralVeryDark',
      },
      info: {
        titulo: 'O que é?',
        descricao:
          'Pontos para sua empresa e mais saúde e nutrição para os seus trabalhadores.',
      },
      contrateMais: [],
      itensContratados: [
        {
          titulo: 'Lorem Ipsum',
          siglaProduto: [],
          rota: {
            pathContrateMais: '',
            pathContratado: '',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: false,
            destino: '',
            parametros: [
              'siglaEmissor',
              'token',
              'accessToken',
              'cnpj',
              'refreshToken',
            ],
          },
          tag: '',
          icone: {
            nome: 'card-game',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
          itens: null,
          atalho: {
            novaAba: false,
            isAtalho: false,
          },
        },
      ],
      itensFixos: null,
    },
    {
      id: '608b5eed-e300-42ea-ae3f-e2edf7f75de4',
      titulo: 'Lorem Ipsum',
      rota: '/portal',
      redirecionamento: {
        url: '',
        urlContrateMais: '',
        novaAba: true,
        destino: '',
        parametros: null,
      },
      tag: '',
      icone: {
        nome: 'SOLUCOES_FINANCEIRAS',
        cor: 'neutralVeryDark',
      },
      info: {
        titulo: 'O que é?',
        descricao:
          'Serviços de crédito para você facilitar a vida financeira dos seus trabalhadores.',
      },
      contrateMais: [],
      itensContratados: [
        {
          titulo: 'Lorem Ipsum',
          siglaProduto: [],
          rota: {
            pathContrateMais: '',
            pathContratado: '/portal',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: null,
          },
          tag: '',
          icone: {
            nome: 'cashback-dollar',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
          itens: [],
          atalho: {
            novaAba: false,
            isAtalho: false,
          },
        },
        {
          titulo: 'Lorem Ipsum',
          siglaProduto: [],
          rota: {
            pathContrateMais: '',
            pathContratado: '',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: null,
          },
          tag: '',
          icone: {
            nome: 'loading-arrow',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: false,
          itens: [],
          atalho: {
            novaAba: false,
            isAtalho: false,
          },
        },
        {
          titulo: 'Lorem Ipsum',
          siglaProduto: [],
          rota: {
            pathContrateMais: '',
            pathContratado: '',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: null,
          },
          tag: '',
          icone: {
            nome: 'money-refresh',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: false,
          itens: [],
          atalho: {
            novaAba: false,
            isAtalho: false,
          },
        },
      ],
      itensFixos: null,
    },
    {
      id: '86c60dfc-be7b-464d-81f5-aaa77fc5a938',
      titulo: 'Lorem Ipsum',
      rota: '/solucoes-contratadas',
      redirecionamento: {
        url: '',
        urlContrateMais: '',
        novaAba: true,
        destino: '',
        parametros: [
          'siglaEmissor',
          'token',
          'accessToken',
          'cnpj',
          'refreshToken',
        ],
      },
      tag: 'epr_spe_prod_menu_contratemais',
      icone: {
        nome: 'money-refresh',
        cor: 'neutralVeryDark',
      },
      info: null,
      contrateMais: null,
      itensContratados: null,
      itensFixos: null,
    },
    {
      id: 'eea60c36-f0cc-4272-bdd0-b6cf60bad109',
      titulo: 'Lorem Ipsum',
      rota: '/',
      redirecionamento: {
        url: '',
        urlContrateMais: '',
        novaAba: true,
        destino: '',
        parametros: null,
      },
      tag: 'epr_spe_prod_menu_saiba_mais',
      icone: {
        nome: 'ICON_BLOG',
        cor: 'neutralVeryDark',
      },
      info: null,
      contrateMais: [],
      itensContratados: [],
      saibaMais: [
        {
          titulo: 'Lorem Ipsum',
          siglaProduto: [],
          rota: {
            pathContrateMais: '/treinamentos',
            pathContratado: '/treinamentos',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: [
              'siglaEmissor',
              'token',
              'accessToken',
              'cnpj',
              'refreshToken',
            ],
          },
          tag: '',
          icone: {
            nome: 'player',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
          itens: [],
          atalho: {
            novaAba: false,
            isAtalho: false,
          },
        },
        {
          titulo: 'Lorem Ipsum',
          siglaProduto: [],
          rota: {
            pathContrateMais: '/contratos',
            pathContratado: '/contratos',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: true,
            destino: '',
            parametros: [
              'siglaEmissor',
              'token',
              'accessToken',
              'cnpj',
              'refreshToken',
            ],
          },
          tag: '',
          icone: {
            nome: 'contract',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
          itens: [],
          atalho: {
            novaAba: false,
            isAtalho: false,
          },
        },
        {
          titulo: 'Lorem Ipsum',
          siglaProduto: [],
          rota: {
            pathContrateMais: '/ajuda',
            pathContratado: '/ajuda',
          },
          redirecionamento: {
            url: '',
            urlContrateMais: '',
            novaAba: false,
            destino: '',
            parametros: [
              'siglaEmissor',
              'token',
              'accessToken',
              'cnpj',
              'refreshToken',
            ],
          },
          tag: '',
          icone: {
            nome: 'question',
            cor: 'neutralVeryDark',
          },
          itemHabilitado: true,
          itens: [],
          atalho: {
            novaAba: false,
            isAtalho: false,
          },
        },
      ],
      itensFixos: null,
    },
  ],
};

export const getIconSource = (name?: string) =>
  iconsMenuLocal[name?.toUpperCase() as keyof typeof iconsMenuLocal];

export interface MenusContextProps {
  searchData: ItemBusca[];
  productMenu: MenuType[];
  shortcuts?: Shortcut[];
  isOpen: boolean;
  toggleMenu: () => void;
  SELECTED_ACCORDION_SELECTOR: string;
  FIRST_MENU_ELEMENT_SELECTOR: string;
  isActiveRoute: (route?: string) => boolean;
  activeRoute: string;
  findParentItem: (
    items: MenuItem,
    activeRouteParam: string
  ) => MenuItem | undefined;
  findParentItemByMenuTypeArray: (
    items: MenuType[],
    isContrateMais: boolean
  ) => MenuItem | undefined;
  parentItem?: MenuItem;
  parentMenuTypeItem?: MenuType;
  isMatchRoute: (rota: RotaRedirect) => boolean;
  setActiveRoute: (route: string) => void;
}

export interface MenusProviderProps {
  children: ReactNode;
}

export const MenusContext = createContext<MenusContextProps>(
  {} as MenusContextProps
);

const SELECTED_ACCORDION_SELECTOR = '[data-szh-adn-btn][aria-expanded="true"]';
const FIRST_MENU_ELEMENT_SELECTOR =
  '[data-selector=first-menu-element-selector]';

export function MenusProvider({ children }: MenusProviderProps) {
  const location = useLocation();

  const rawProductMenu: any = mock;

  const [isOpen, setIsOpen] = useState(true);
  const [activeRoute, setActiveRoute] = useState('');
  const [parentItem, setParentItem] = useState<MenuItem>();
  const [parentMenuTypeItem, setParentMenuTypeItem] = useState<MenuType>();

  const productMenu = useMemo(() => rawProductMenu?.menu, [rawProductMenu]);

  const searchData = useMemo(() => {
    const searchResult = rawProductMenu?.busca;
    return searchResult || [];
  }, [rawProductMenu]);

  const extractShortcutsFromMenuItem = (menu: MenuType) => {
    const activeShortcuts = [] as Shortcut[];
    menu.itensContratados?.forEach(itemContratado => {
      if (itemContratado.atalho?.isAtalho)
        activeShortcuts.push(itemContratado.atalho);
      itemContratado.itens?.forEach(item => {
        if (item.atalho?.isAtalho) activeShortcuts.push(item.atalho);
      });
    });
    return activeShortcuts;
  };

  const toggleMenu = () => {
    setIsOpen(state => {
      const toggleMenuState = !state;
      return toggleMenuState;
    });
  };
  const shortcuts = useMemo(() => {
    const activeShortcuts = [] as Shortcut[];
    productMenu?.forEach((item: any) => {
      if (item.atalho?.isAtalho) activeShortcuts.push(item.atalho);
      const activeShortcutsInSubmenu = extractShortcutsFromMenuItem(item);
      activeShortcuts.push(...activeShortcutsInSubmenu);
    });
    return activeShortcuts;
  }, [productMenu]);

  const isActiveRoute = useCallback(
    (route?: string) => {
      const isActive = location.pathname === route;
      if (isActive) {
        setActiveRoute(route || '');
      }
      return isActive;
    },
    [location]
  );

  const isMatchRoute = (rota: RotaRedirect) =>
    rota.pathContratado === activeRoute ||
    rota.pathContrateMais === activeRoute;

  const checkMatchRouteBySubItem = (subItem?: MenuItem, item?: MenuType) => {
    if (subItem?.itens) {
      subItem?.itens.forEach(subItemItem => {
        const rota = subItemItem.rota as RotaRedirect;
        if (rota && isMatchRoute(rota)) {
          setParentMenuTypeItem(item);
        }
      });
    }
  };

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const checkMatchRoute = (items: MenuType[], isContrateMais: boolean) => {
    items.forEach(item => {
      const subItems = isContrateMais
        ? item.contrateMais
        : item.itensContratados;
      if (subItems) {
        subItems.forEach(subItem => {
          if (subItem?.itens?.length) {
            checkMatchRouteBySubItem(subItem, item);
          } else {
            const rota = subItem.rota as RotaRedirect;
            if (rota && isMatchRoute(rota)) {
              setParentMenuTypeItem(item);
            }
          }
        });
      }
    });
  };

  const findParentItemByMenuTypeArray = (
    items: MenuType[],
    isContrateMais: boolean
  ): MenuType | undefined => {
    if (activeRoute) {
      checkMatchRoute(items, isContrateMais);
    }
    return undefined;
  };

  const findParentItem = (
    menuItemParam: MenuItem,
    activeRouteParam: string
  ): MenuItem | undefined => {
    if (menuItemParam.itens?.length && activeRouteParam) {
      menuItemParam.itens.forEach(subItem => {
        const rota = subItem.rota as RotaRedirect;
        if (
          rota &&
          (rota.pathContratado === activeRouteParam ||
            rota.pathContrateMais === activeRouteParam)
        ) {
          setParentItem(menuItemParam);
        }
      });
    }
    return undefined;
  };

  const valueMemo = useMemo(
    (): MenusContextProps => ({
      searchData,
      productMenu,
      shortcuts,
      isOpen,
      toggleMenu,
      SELECTED_ACCORDION_SELECTOR,
      FIRST_MENU_ELEMENT_SELECTOR,
      isActiveRoute,
      activeRoute,
      findParentItem,
      parentItem,
      findParentItemByMenuTypeArray,
      parentMenuTypeItem,
      isMatchRoute,
      setActiveRoute,
    }),
    [
      productMenu,
      shortcuts,
      isOpen,
      toggleMenu,
      searchData,
      isActiveRoute,
      activeRoute,
      findParentItem,
      parentItem,
      findParentItemByMenuTypeArray,
      parentMenuTypeItem,
      isMatchRoute,
      setActiveRoute,
    ]
  );

  return (
    <MenusContext.Provider value={valueMemo}>{children}</MenusContext.Provider>
  );
}
export const useMenus = () => {
  const context = useContext(MenusContext);

  if (!context) {
    throw new Error('useMenus must be used within a MenusProvider');
  }

  return context;
};
