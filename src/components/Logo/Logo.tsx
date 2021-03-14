import React from 'react';
import * as S from './style';

interface Props {
  title: string;
}

export default function Logo(props: Props) {
  const { title } = props;
  return (
    <S.Logo>
      <span>{title}</span>
    </S.Logo>
  );
}
