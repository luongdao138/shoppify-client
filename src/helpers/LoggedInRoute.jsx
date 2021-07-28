import { Redirect, Route } from 'react-router-dom';

const LoggedInRoute = ({ children, loading, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) return children;
        else return <Redirect to='/' />;
      }}
    />
  );
};

export default LoggedInRoute;
