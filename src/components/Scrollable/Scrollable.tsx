import React, { ReactNode } from 'react';
import * as S from './style';

interface Props {
  children: ReactNode;
}

export default function Scrollable(props: Props) {
  const { children } = props;

  return <S.Scrollable>{children}</S.Scrollable>;
}
