/* eslint-disable prefer-regex-literals */
export const splitAndGetFirst = (str: string, separador: string) =>
  str.slice(0, str.indexOf(separador));

export const splitAndSliceByIndex = (
  str: string,
  separador: string,
  sliceIndex: number
) => {
  const strSplitted = str.split(separador);
  return strSplitted.slice(sliceIndex);
};

export const getInitialsName = (name: string) => {
  const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

  const initials = [...name.matchAll(rgx)] || [];

  return (
    (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
  ).toUpperCase();
};

export const sanitizeOperationTypeColor = {
  RESGATE_TOTAL: '#FF3A29',
  RESGATE: '#FF3A29',
  APLICACAO: '#32CD32',
};

export const sanitizeOperationType = {
  RESGATE_TOTAL: 'Resgate Total',
  RESGATE: 'Resgate Parcial',
  APLICACAO: 'Aplicação',
};

export const sanitizeStatus = {
  PENDENTE: 'Pendente',
  DISTRIBUIDO: 'Distribuído',
  INTEGRADA: 'Integrada',
};

export const sanitizeStatusAdmin = {
  PENDENTE: 'Pendente',
  DISTRIBUIDO: 'Distribuído',
  INTEGRADA: 'Integrada',
  ERRO: 'Erro',
  AGUARDANDO_PROCESSAMENTO: 'Aguardando Processamento',
  'AGUARDANDO PROCESSAMENTO': 'Aguardando Processamento',
  AGUARDANDO: 'Aguardando',
  EM_PROCESSAMENTO: 'Em Processamento',
  LIQUIDADA: 'Liquidada',
  INCONSISTENCIAS: 'Inconsistência',
  WARNING: 'Warning',
  CANCELADO: 'Cancelado'
};


