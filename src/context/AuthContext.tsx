import { v4 as uuid } from "uuid";

// ** React Imports
import { createContext, useEffect, useState, ReactNode } from "react";

// ** Axios
import axios from "axios";

// ** Types
import {
  AuthValuesType,
  LoginParams,
  ErrCallbackType,
  RegisterParams,
} from "./types";
import { useLocation, useNavigate } from "react-router-dom";
import CustomBackdrop from "../components/@core/CustomBackdrop";
import { mockLogin, mockRegister, mockUsers } from "../@fake-db/auth";
import { checkCookie, setCookie } from "../assets/utils/cookies";
import Swal from "sweetalert2";

// ** Defaults
const defaultProvider: AuthValuesType = {
  loading: true,
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  signup: () => Promise.resolve(),
};
const randomToken = uuid();

const AuthContext = createContext(defaultProvider);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  // ** States
  const [loading, setLoading] = useState<boolean>(defaultProvider.loading);

  // ** Hooks
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userList = window.localStorage.getItem("userList");
    mockRegister();
    mockLogin();
    setLoading(true);
    if (!userList) mockUsers();
    initAuth();
  }, [navigate]);

  const initAuth = async (): Promise<void> => {
    const userData = window.localStorage.getItem("userData");
    if (checkCookie() && userData) {
      setLoading(false);
    } else {
      if (location.pathname === "/") {
        navigate("/");
      } else if (location.pathname === "/sign-up") {
        navigate("/sign-up");
      } else if (location.pathname === "/forgot-password") {
        navigate("/forgot-password");
      } else {
        navigate("/sign-in");
      }
      window.localStorage.removeItem("userData");
      setLoading(false);
    }
  };
  const handleLogin = (
    params: LoginParams,
    errorCallback?: ErrCallbackType
  ) => {
    axios
      .post("/mock/login", params)
      .then(async (response) => {
        if (params.rememberMe) {
          setCookie("accessToken", randomToken, 0); // remember
        } else {
          setCookie("accessToken", randomToken, 1); // 1day
        }
        window.localStorage.setItem(
          "userData",
          JSON.stringify(response.data.userData)
        );
        navigate("/");
      })

      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleLogout = () => {
    window.localStorage.removeItem("userData");
    setCookie("accessToken", "", 1);
    navigate("/sign-in");
  };

  const handleRegister = (
    params: RegisterParams,
    errorCallback?: ErrCallbackType
  ) => {
    axios
      .post("/mock/register", params)
      .then(async (response) => {
        if (response.status === 200) {
          Swal.fire({
            title: "Send e-mail succesfully",
            text: "",
            icon: "success",
            confirmButtonColor: "#000",
            confirmButtonText: "OK",
          }).then(() => {
            navigate("/sign-in");
          });
        }
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const values = {
    loading,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    signup: handleRegister,
  };
  return (
    <AuthContext.Provider value={values}>
      {loading ? <CustomBackdrop load={loading} /> : children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
