import { ReactNode, useReducer } from "react";
import AuthContext from "./authContext";

interface Props {
  children: ReactNode;
}

interface LoginAction {
  type: "LOGIN";
  userName: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (user: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.userName;
  if (action.type === "LOGOUT") return "";

  return user;
};

const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
