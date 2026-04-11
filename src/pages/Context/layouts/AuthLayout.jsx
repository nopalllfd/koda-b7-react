import { Outlet } from 'react-router';
import { AuthProvider } from '../context/AuthProvider';

function AuthLayout() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
}

export default AuthLayout;
