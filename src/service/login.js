import request from "./index";

export function getLoginData(account, password) {
  return request({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
}
