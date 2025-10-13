const changeRoles = (roles) => {
  switch (roles) {
    case "super_admin":
      return "Super Admin";
    case "admin":
      return "Admin";
    default:
      return "User";
  }
};

export { changeRoles };
