import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GlobalStyle } from './globalStyle';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { RootState } from './store';

export default function App() {
  const { routes } = useSelector((state: RootState) => state.app);
  return (
    <>
      <Router basename="/">
        <Layout flex>
          <Sidebar routes={routes} />
          <Main routes={routes} />
        </Layout>
      </Router>
      <GlobalStyle />
    </>
  );
}
