import { Button, Input } from "antd";
import DefaultLayout from "../../components/organism/layouts";
import LoginCards from "../../components/molecules/login-cards";

const Login = () => {
  return (
    <>
      <DefaultLayout>
        <LoginCards>
          <span className="text-primary-green text-2xl font-semibold">
            Masuk
          </span>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <Input size="large" placeholder="Masukkan email Anda" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Password</label>
              <Input size="large" placeholder="Masukkan password Anda" />
            </div>
            <div className="flex justify-end">
              <span className="text-xs font-semibold text-primary-green cursor-pointer">
                Lupa password?
              </span>
            </div>
            <Button size="large" type="primary">
              Masuk
            </Button>
          </div>
        </LoginCards>
      </DefaultLayout>
    </>
  );
};

export default Login;
