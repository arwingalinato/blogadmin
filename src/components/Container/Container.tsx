import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Container(props: Props) {
  const { children } = props;
  return <div>{children}</div>;
}
