export const loginRules = {
  username: [
    {
      required: true,
      message: "用户名未填写",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码未填写",
      trigger: "blur",
    },
    { min: 0, max: 20, message: "密码的长度为4-20位", trigger: "blur" },
  ],
};
