import { login } from '@/api/user';
export default function usePageIndex() {
  const userLogin = () => {
    login({
      name: 'xxx'
    });
  };
  return {
    userLogin
  };
}
