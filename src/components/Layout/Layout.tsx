import React, { ReactNode } from 'react';
import * as S from './style';

interface Props {
  children: ReactNode;
  flex?: boolean;
}

function Layout(props: Props) {
  const { children, flex = false } = props;
  return <S.Layout flex={flex}>{children}</S.Layout>;
}

export default Layout;
