// ** Mock Adapter
import mock from "../mock";

// ** Types
import { UserDataType } from "../../context/types";
export const prepMockUsers: UserDataType[] = [
  {
    id: 1,
    password: "admin",
    firstName: "John",
    lastName: " Doe",
    email: "admin@gmail.com",
  },
  {
    id: 2,
    password: "client",
    firstName: "John",
    lastName: "Wick",
    email: "client@gmail.com",
  },
];

export const mockUsers = () =>
  window.localStorage.setItem("userList", JSON.stringify(prepMockUsers));

export const mockLogin = () => {
  const userList = window.localStorage.getItem("userList");
  if (userList) {
    const users: UserDataType[] = JSON.parse(userList);

    mock.onPost("/mock/login").reply((request) => {
      const { email, password } = JSON.parse(request.data);

      let error = {
        email: ["Something went wrong"],
      };

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        const accessToken = [{ id: user.id }];

        const response = {
          accessToken,
          userData: { ...user, password: undefined },
        };

        return [200, response];
      } else {
        error = {
          email: ["email or Password is Invalid"],
        };

        return [400, { error }];
      }
    });
  }
};

export const mockRegister = () => {
  const userList = window.localStorage.getItem("userList");
  if (userList) {
    const users: UserDataType[] = JSON.parse(userList);
    mock.onPost("/mock/register").reply((request) => {
      if (request.data.length > 0) {
        const { email, password, firstName, lastName } = JSON.parse(
          request.data
        );
        const isEmailAlreadyInUse = users.find((user) => user.email === email);
        const error = {
          email: isEmailAlreadyInUse ? "This email is already in use." : null,
        };

        if (!error.email) {
          const { length } = users;
          let lastIndex = 0;
          if (length) {
            lastIndex = users[length - 1].id;
          }
          const userData = {
            id: lastIndex + 1,
            email,
            password,
            firstName,
            lastName,
          };

          users.push(userData);

          const user = { ...userData };
          window.localStorage.setItem("userList", JSON.stringify(users));
          delete user.password;

          return [200];
        }

        return [200, { error }];
      } else {
        return [401, { error: "Invalid Data" }];
      }
    });
  }
};
