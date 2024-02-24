export type ErrCallbackType = (err: { [key: string]: string }) => void;

export type LoginParams = {
  email: string;
  password: string;
  rememberMe?: boolean;
};

export type RegisterParams = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type UserDataType = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};

export type AuthValuesType = {
  loading: boolean;
  logout: () => void;
  setLoading: (value: boolean) => void;
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => void;
  signup: (params: RegisterParams, errorCallback?: ErrCallbackType) => void;
};
