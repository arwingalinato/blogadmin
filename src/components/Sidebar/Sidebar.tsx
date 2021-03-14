import React from 'react';
import * as S from './style';
import Scrollable from '../Scrollable';
import TopNav from '../TopNav';
import Logo from '../Logo';
import { IRoute } from '../../store/interfaces';
import SidebarLink from './SidebarLink';

interface Props {
  routes: IRoute[];
}

export default function Sidebar(props: Props) {
  const { routes } = props;

  return (
    <S.Sidebar>
      <TopNav>
        <Logo title="App Name" />
      </TopNav>
      <Scrollable>
        {routes.map((route: IRoute) => (
          <div key={route.id}>
            {route.side && <SidebarLink route={route} />}
          </div>
        ))}
      </Scrollable>
    </S.Sidebar>
  );
}
