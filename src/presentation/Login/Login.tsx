/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/Button';

import { addToken, getToken } from './service';
import * as S from './styles';

export const LoginPresentation = () => {
  const searchParam = useMemo(
    () => new URLSearchParams(window.location.search),
    []
  );
  const navigate = useNavigate();

  useEffect(() => {
    const token = (searchParam.get('authorization') as string) || getToken();
    const redirect = searchParam.get('redirect') as string;
    if (searchParam.get('authorization')) {
      addToken(token);
      navigate(redirect);
    }
  }, [navigate, searchParam]);

  const loginWithSSO = () => {
    const redirect = searchParam.get('redirect')
      ? searchParam.get('redirect')
      : '/home';
    window.location.href = `${import.meta.env.VITE_APP_SECURITY_BACKEND_URL}/saml/login?RelayState=${window.location.origin}/?redirect=${redirect}`;
  };

  return (
    <S.Container>
      <S.Logo />

      <S.Form>
        <Button onClick={loginWithSSO} type="button">
          Entrar com SSO
        </Button>
      </S.Form>
    </S.Container>
  );
};
