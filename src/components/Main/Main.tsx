import React from 'react';
import { lazy } from '@loadable/component';
import { Switch, Route } from 'react-router-dom';
import * as S from './style';
import Scrollable from '../Scrollable';
import TopNav from '../TopNav';
import { IRoute } from '../../store/interfaces';

interface Props {
  routes: IRoute[];
}

export default function Main(props: Props) {
  const { routes } = props;
  return (
    <S.Main>
      <TopNav>topNav</TopNav>
      <Scrollable>
        <Switch>
          {routes.map((route) => {
            const Component = lazy(
              () => import(`../../pages/${route.component}`),
            );

            return (
              <Route
                key={route.id}
                exact
                path={route.url}
                component={Component}
              />
            );
          })}
        </Switch>
      </Scrollable>
    </S.Main>
  );
}
