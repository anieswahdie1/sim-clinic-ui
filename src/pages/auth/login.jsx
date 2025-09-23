import { Button, Input } from "antd";
import Footer from "../../components/atoms/footer/footer";
import Header from "../../components/atoms/header/header";

const Login = () => {
  return (
    <>
      <div className="relative min-h-screen bg-primary-gray">
        <Header />
        <div className="flex flex-col items-center justify-center min-h-screen bg-primary-gray pt-[80px] pb-[60px]">
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
        <Footer />
      </div>
    </>
  );
};

export default Login;
