import { ReactNode } from 'react';
import { Redirect, Route } from 'react-router-dom';
import styled from 'styled-components';
import SpinnerFc from '../components/Spinner';
import { User } from '../features/interface';

const PrivateRoute = ({ children, loading, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (loading)
          return (
            <SpinnerWrapper>
              <SpinnerFc width='50px' />;
            </SpinnerWrapper>
          );

        if (user) return children;
        else return <Redirect to='/login' />;
      }}
    />
  );
};

const SpinnerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PrivateRoute;
