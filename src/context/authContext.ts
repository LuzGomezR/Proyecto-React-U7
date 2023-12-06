import { createContext, Context } from 'react';

interface User {
    id: number;
    username: string;
    email: string;
  }

interface AuthData {

  user: User | null; 
  token: string | null;
  step: string | null;
  setStep: string;
}
const AuthContext: Context<AuthData> = createContext<AuthData>({
  user: null,
  token: null,
  step: null,
  setStep?: null
 });

export default AuthContext;
