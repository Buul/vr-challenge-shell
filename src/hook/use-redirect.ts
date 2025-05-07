/* eslint-disable consistent-return */
import { MouseEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { RotaRedirect, URLRedirect } from '@/types/menus';

export type RedirectParams = {
  rota?: string | RotaRedirect;
  redirecionamento?: URLRedirect;
  hasToken?: boolean;
  isContrateMais?: boolean;
};

export const useRedirect = () => {
  const navigate = useNavigate();

  const handleRota = useCallback(
    (rota: string | RotaRedirect, isContrateMais: boolean) => {
      if (typeof rota === 'string') {
        return navigate(rota);
      }

      const path = isContrateMais ? rota.pathContrateMais : rota.pathContratado;

      return navigate(path as string, {
        replace: true,
      });
    },
    [navigate]
  );

  const openUrl = (redirectUrl: string, { novaAba }: URLRedirect) =>
    window.open(redirectUrl, `${novaAba ? '_blank' : '_self'}`);

  const redirect = useCallback(
    async ({
      hasToken,
      rota = '',
      redirecionamento,
      isContrateMais = false,
    }: RedirectParams) => {
      if (!redirecionamento?.url && !redirecionamento?.urlContrateMais) {
        return handleRota(rota, isContrateMais);
      }

      if (isContrateMais) {
        if ((rota as RotaRedirect).pathContrateMais) {
          return navigate((rota as RotaRedirect).pathContrateMais as string);
        }

        if (redirecionamento?.urlContrateMais) {
          openUrl(redirecionamento.urlContrateMais, redirecionamento);
          return;
        }

        return;
      }

      const urlRedirecionamento = redirecionamento?.url
        ? redirecionamento.url
        : '';

      if (!hasToken) {
        openUrl(urlRedirecionamento, redirecionamento);
      }
    },
    [handleRota, navigate]
  );

  const onRedirect =
    (params: RedirectParams) =>
    <T>(event?: MouseEvent<T>) => {
      event?.preventDefault();
      redirect(params);
    };

  return { onRedirect, redirect };
};
