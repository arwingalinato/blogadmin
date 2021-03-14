import React, { Suspense } from 'react';
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
          <Suspense fallback={<div>Loading...</div>}>
            <Sidebar routes={routes} />
            <Main routes={routes} />
          </Suspense>
        </Layout>
      </Router>
      <GlobalStyle />
    </>
  );
}
