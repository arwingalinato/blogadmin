import React, { ReactNode } from 'react';
import * as S from './style';

type Props = {
  children: ReactNode;
};

export default function TopNav(props: Props) {
  const { children } = props;
  return <S.TopNav>{children}</S.TopNav>;
}
