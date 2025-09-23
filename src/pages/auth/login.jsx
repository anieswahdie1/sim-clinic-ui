import { Button, Input } from "antd";
import DefaultLayout from "../../components/organism/layouts";
import LoginCards from "../../components/molecules/login-cards";
import { Controller, useForm } from "react-hook-form";
import { useCallback } from "react";

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <>
      <DefaultLayout>
        <LoginCards>
          <span className="text-primary-green text-2xl font-semibold">
            Masuk
          </span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: "Email wajib diisi!" }}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        size="large"
                        placeholder="Masukkan email Anda"
                        status={errors?.email ? "error" : ""}
                      />
                      {errors?.email && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors?.email?.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Password</label>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Password wajib diisi!" }}
                  render={({ field }) => (
                    <>
                      <Input
                        {...field}
                        size="large"
                        placeholder="Masukkan password Anda"
                        status={errors.password ? "error" : ""}
                      />
                      {errors.password && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.password.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="flex justify-end">
                <span className="text-xs font-semibold text-primary-green cursor-pointer">
                  Lupa password?
                </span>
              </div>
              <Button size="large" type="primary" htmlType="submit">
                Masuk
              </Button>
            </div>
          </form>
        </LoginCards>
      </DefaultLayout>
    </>
  );
};

export default Login;
