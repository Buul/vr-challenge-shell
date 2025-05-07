export interface IconType {
  nome?: string;
  cor?: string;
}

export interface InfoType {
  titulo?: string;
  descricao?: string;
}

export interface RedirectParameters {
  cnpj?: string;
  token?: string;
  accessToken?: string;
  refreshToken?: string;
  siglaEmissor?: string;
}

export interface URLRedirect {
  url?: string;
  urlContrateMais?: string;
  novaAba?: boolean;
  destino?: string;
  parametros?: Array<keyof RedirectParameters>;
}

export interface RotaRedirect {
  pathContrateMais?: string;
  pathContratado?: string;
}

interface MenuBase {
  id?: string;
  titulo?: string;
  rota?: string | RotaRedirect;
  redirecionamento?: URLRedirect;
  tag?: string;
  icone?: IconType;
  itemHabilitado?: boolean;
  atalho?: Shortcut;
  subItens?: Subitem[];
}

export type Item = Omit<MenuBase, 'id'>;

export type Subitem = Omit<MenuBase, 'id'>;

export interface MenuItem extends Item {
  itens?: Item[];
}

export interface MenuType extends MenuBase {
  info?: InfoType;
  gerenciar?: MenuItem[];
  saibaMais?: MenuItem[];
  itensFixos?: MenuItem[];
  contrateMais?: MenuItem[];
  itensContratados?: MenuItem[];
}

export interface Menu {
  id?: string;
  idEmissor?: string;
  menu?: MenuType[];
  busca?: ItemBusca[];
}

export interface Shortcut {
  isAtalho: boolean;
  tituloAtalho: string;
  rota: string;
  urlRedirecionamento: string;
  novaAba: boolean;
  destino: string;
  tag: string;
  parametros: Array<keyof RedirectParameters>;
  icone: IconType;
}

export interface ItemBusca {
  iconeSecao: IconType['nome'];
  tituloMenu: string;
  display: string;
  rota: string;
  urlRedirecionamento: string;
  palavrasChave: string[];
  novaAba: boolean;
  destino: string;
  tag: string;
  parametros: Array<keyof RedirectParameters>;
  icone: IconType;
}
