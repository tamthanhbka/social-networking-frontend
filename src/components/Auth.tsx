import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type User = {
  id: string;
  username: string;
  phone: string;
  isActivated: boolean;
  email: string;
  followers: string[];
  createdAt: string;
  updatedAt: string;
  avatar: string;
};
type ContextPayloadType = {
  login: boolean;
  action: { login: (user: any) => any; logout: Function };
  user?: User;
};
const AuthContext = createContext<ContextPayloadType>({
  login: false,
  action: { login: () => {}, logout: () => {} },
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState<User>();
  const action = useMemo(
    () => ({
      login: (user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
        setLogin(true);
        setUser(user);
      },
      logout: () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setLogin(false);
        setUser(undefined);
      },
    }),
    []
  );
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      return;
    }
    setLogin(true);
    setUser(JSON.parse(user));
  }, []);
  return (
    <>
      <AuthContext.Provider value={{ login, action, user }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
