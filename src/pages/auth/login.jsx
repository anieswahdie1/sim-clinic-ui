import { Button } from "antd";
import DefaultLayout from "../../components/organism/layouts";
import LoginCards from "../../components/molecules/login-cards";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import FormInput from "../../components/molecules/input-forms";
import { emailRules, passwordRules } from "../../validations/authRules";
import useAuth from "../../stores/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

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

  const navigate = useNavigate();

  const setAuthorizeTrue = useAuth((state) => state.setAuthorizeTrue);

  const onSubmit = useCallback(
    (data) => {
      console.log(data);
      setAuthorizeTrue();
      navigate("/home");
      Swal.fire({
        title: "Login Sukses!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
        timerProgressBar: true,
      });
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
                  label="Email"
                  name="email"
                  control={control}
                  rules={emailRules}
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

export default Login;
