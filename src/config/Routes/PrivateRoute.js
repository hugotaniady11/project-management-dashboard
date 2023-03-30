import { Navigate, Route } from 'react-router-dom';
import { useAuthenticated } from '../../utils/auth';

function PrivateRoute({ path, ...props }) {
  const isAuthenticated = useAuthenticated();

  return isAuthenticated ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default PrivateRoute;
