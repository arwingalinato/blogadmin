import React from 'react';
import { NavLink } from 'react-router-dom';
import { IRoute } from '../../store/interfaces';

interface Props {
  route: IRoute;
}

export default function SidebarLink(props: Props) {
  const { route } = props;
  return (
    <NavLink to={route.url} exact={route.exact}>
      {route.label}
    </NavLink>
  );
}
