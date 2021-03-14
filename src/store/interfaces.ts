export interface IRoute {
  id: number;
  label: string;
  url: string;
  exact: boolean;
  icon: string;
  component: string;
  side: boolean;
}

export interface IPost {
  id: number;
  title: string;
  slug: string;
  summary: string;
  content: string;
  status: string;
  published: boolean;
}
