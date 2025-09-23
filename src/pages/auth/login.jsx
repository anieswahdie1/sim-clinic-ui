import { Button } from "antd";
import { useCallback } from "react";

const Login = () => {
  const onClick = useCallback(() => {
    console.log("login");
  }, []);

  return (
    <>
      <div className="flex flex-row gap-10 items-center justify-center">
        <div>Login Pages</div>
        <Button type="primary" onClick={onClick}>
          Login
        </Button>
      </div>
    </>
  );
};

export default Login;
