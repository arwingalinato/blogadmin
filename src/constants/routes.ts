const routes = [
  {
    id: 1,
    label: 'Dashboard',
    url: '/',
    exact: true,
    icon: 'compass.svg',
    component: 'Dashboard',
    side: true,
  },
  {
    id: 2,
    label: 'Posts',
    url: '/posts',
    exact: false,
    icon: 'file-text.svg',
    component: 'Post/Index',
    side: true,
  },
  {
    id: 3,
    label: 'Create Post',
    url: '/posts/create',
    exact: false,
    icon: 'plus.svg',
    component: 'Post/Create',
    side: false,
  },
  {
    id: 4,
    label: 'Update Post',
    url: '/post/:id',
    exact: false,
    icon: 'plus.svg',
    component: 'Post/Update',
    side: false,
  },
];

export default routes;
