import { Button, Input } from "antd";

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-primary-gray">
        <div className="bg-white flex flex-col gap-4 min-w-80 rounded-xl min-h-90 shadow-xl p-5">
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
        </div>
      </div>
    </>
  );
};

export default Login;
