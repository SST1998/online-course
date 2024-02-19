// ** React Imports
import { createContext, useEffect, useState, ReactNode } from "react";

// ** Types
import {
  AuthValuesType,
  LoginParams,
  ErrCallbackType,
  UserDataType,
} from "./types";
import { useNavigate } from "react-router-dom";

// ** Defaults
const defaultProvider: AuthValuesType = {
  user: null,
  loading: true,
  setUser: () => null,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
};

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [user, setUser] = useState<UserDataType | null>(defaultProvider.user);
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);

  // ** Hooks
  const router = useNavigate();
  useEffect(() => {
    // window.localStorage.setItem(
    //   "user",
    //   JSON.stringify([
    //     {
    //       email: "user@gmail.com",
    //       password: "1234",
    //     },
    //   ])
    // );

    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem("user");
      if (storedToken) {
        console.log("if");

        setLoading(false);
      } else {
        console.log("else");
        setLoading(false);
        router("/sign-in");
      }
    };

    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (
    params: LoginParams,
    errorCallback?: ErrCallbackType
  ) => {
    // axios
    // .post(authConfig.loginEndpoint, params)
    // .then(async response => {
    //   params.rememberMe
    //     ? window.localStorage.setItem(authConfig.storageTokenKeyName, response.data.accessToken)
    //     : null
    //   const returnUrl = router.query.returnUrl

    //   setUser({ ...response.data.userData })
    //   params.rememberMe ? window.localStorage.setItem('userData', JSON.stringify(response.data.userData)) : null

    //   const redirectURL = returnUrl && returnUrl !== '/' ? returnUrl : '/'

    //   router.replace(redirectURL as string)
    // })
    console.log(params);
  };

  const handleLogout = () => {
    window.localStorage.removeItem("userData");
    router("/sign-in");
  };

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
