export const setCookie = (cname: string, cvalue: string, exdays: number) => {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  if (exdays === 0) {
    document.cookie = `${cname}=${cvalue};expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`; // rememberMe
  } else {
    if (cvalue === "") {
      document.cookie = `${cname}=;path=/`; // for logout
    } else {
      document.cookie = `${cname}=${cvalue};${expires};path=/`; // set day
    }
  }
};

export const getCookie = (cname: string) => {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

export const checkCookie = () => {
  const storeToken = getCookie("accessToken");
  return storeToken ? true : false;
};
