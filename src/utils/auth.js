import { useJwt } from 'react-jwt';

export const useAuthenticated = () => {
  const token = localStorage.getItem('token');
  const { decodedToken, isExpired } = useJwt(token);

  if (!token || isExpired) {
    return false;
  }

  return !!decodedToken;

};
