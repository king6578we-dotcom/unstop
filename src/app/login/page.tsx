import LoginRaw, { LoginPage as NamedLoginPage } from '@/components/login/Login';

const LoginPage = (LoginRaw as any)?.default || NamedLoginPage || LoginRaw;

export default function LoginRoute() {
  return <LoginPage />;
}
