import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAuth from "../../stores/useAuth";
import { useCallback } from "react";
import authApi from "../../apis/authApi";
import SuccessAlert from "../../components/atoms/alerts/success";
import FailedAlerts from "../../components/atoms/alerts/failed";
import DefaultLayout from "../../components/organism/layouts";
import LoginCards from "../../components/molecules/login-cards";
import { passwordRules, usernameRules } from "../../validations/authRules";
import FormInput from "../../components/molecules/input-forms";
import { Button } from "antd";

const LoginPage = () => {
  const navigate = useNavigate();
  const setAuthorizeTrue = useAuth((state) => state.setAuthorizeTrue);

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

  const onSubmit = useCallback(
    async (payload) => {
      const { data, success } = await authApi.login(payload);
      if (success) {
        setAuthorizeTrue(data);
        navigate("/home");
        SuccessAlert("Login Berhasil!");
        return;
      }
      FailedAlerts(data);
    },
    [navigate, setAuthorizeTrue]
  );

  return (
    <>
      <DefaultLayout>
        <LoginCards>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
              <span className="text-3xl font-semibold text-primary-green">
                Masuk
              </span>
              <div className="flex flex-col gap-2">
                <FormInput
                  label="Username"
                  name="username"
                  control={control}
                  rules={usernameRules}
                  placeholder="Masukkan email Anda"
                  errors={errors.email}
                />
              </div>
              <div className="flex flex-col gap-2">
                <FormInput
                  label="Password"
                  name="password"
                  control={control}
                  rules={passwordRules}
                  placeholder="Masukkan password Anda"
                  type="password"
                  errors={errors.password}
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

export default LoginPage;
