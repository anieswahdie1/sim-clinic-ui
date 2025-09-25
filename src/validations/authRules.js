export const usernameRules = {
  required: "Username wajib diisi!",
  // pattern: {
  //   value: /^\S+@\S+\.\S+$/,
  //   message: "Format email tidak valid!",
  // },
};

export const passwordRules = {
  required: "Password wajib diisi!",
  minLength: {
    value: 6,
    message: "Password minimal 6 karakter",
  },
};
