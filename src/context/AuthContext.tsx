// ** React Imports
import { createContext, useEffect, useState, ReactNode } from "react";

// ** Types
import {
  AuthValuesType,
  LoginParams,
  ErrCallbackType,
  UserDataType,
} from "./types";
import { useLocation, useNavigate } from "react-router-dom";
import { ONLINE_COURSE_API } from "../assets/api/online-course-api";

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
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    const initAuth = async (): Promise<void> => {
      const userData = window.localStorage.getItem("user");
      if (userData) {
        setLoading(false);
      } else {
        setLoading(false);
        if (location.pathname === "/") {
          navigate("/");
        } else if (location.pathname === "/sign-up") {
          navigate("/sign-up");
        } else {
          navigate("/sign-in");
        }
      }
    };

    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const handleLogin = async (
    params: LoginParams,
    errorCallback?: ErrCallbackType
  ) => {
    await fetch(`${ONLINE_COURSE_API}/login/${params.email}/${params.password}`)
      .then((res) => {
        if (res.status == 200) {
          // params.rememberMe
          //   ? window.localStorage.setItem("user", JSON.stringify(params))
          //   : null;
          window.localStorage.setItem("user", JSON.stringify(params));

          navigate("/");
        } else if (res.status == 401) {
          alert("Access denied");
          return;
        }
      })
      .catch((err) => {
        console.log("catch");
        if (errorCallback) {
          errorCallback(err);
        }
      });
  };

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    navigate("/sign-in");
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
