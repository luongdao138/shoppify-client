import GlobalStyle from './GlobalStyle';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './helpers/PrivateRoute';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { getUserByToken, reset } from './features/userSlice';
import LoggedInRoute from './helpers/LoggedInRoute';
import { getUserDraftList } from './features/cartSlice';
import HistoryPage from './pages/HistoryPage';
import ShoppingDetail from './pages/ShoppingDetail';
import StatsPage from './pages/StatsPage';
import SignupPage from './pages/SignupPage';

function App() {
  const { detail, loading, token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(
        getUserByToken({ token: localStorage.getItem('token') as string })
      );
    } else {
      dispatch(reset());
    }
  }, []);

  useEffect(() => {
    if (detail) {
      dispatch(getUserDraftList());
    }
  }, [detail]);

  return (
    <Router>
      <Switch>
        <PrivateRoute user={detail} exact loading={loading} path='/'>
          <Layout>
            <HomePage />
          </Layout>
        </PrivateRoute>
        <PrivateRoute user={detail} exact loading={loading} path='/history'>
          <Layout>
            <HistoryPage />
          </Layout>
        </PrivateRoute>
        <PrivateRoute user={detail} exact loading={loading} path='/history/:id'>
          <Layout>
            <ShoppingDetail />
          </Layout>
        </PrivateRoute>
        <PrivateRoute user={detail} exact loading={loading} path='/stats'>
          <Layout>
            <StatsPage />
          </Layout>
        </PrivateRoute>
        <LoggedInRoute user={detail} loading={loading} exact path='/login'>
          <LoginPage />
        </LoggedInRoute>
        <LoggedInRoute user={detail} loading={loading} exact path='/signup'>
          <SignupPage />
        </LoggedInRoute>
      </Switch>
      <GlobalStyle />
    </Router>
  );
}

export default App;
