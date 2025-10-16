import { useForm } from "react-hook-form";
import DefaultDrawer from "../../../../components/atoms/drawers/default-drawer";
import FormInput from "../../../../components/molecules/input-forms";

const DrawerInputForm = ({ title = "Input Form", ...attrs }) => {
  const { control } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      role: null,
      fullname: "",
      jabatan: "",
    },
  });
  return (
    <DefaultDrawer
      title={
        <span className="font-bold text-gray-600 opacity-70">{title} </span>
      }
      {...attrs}
    >
      <div className="flex flex-col gap-2">
        <FormInput
          label={"Username"}
          name={"username"}
          placeholder={"Ketikkan Username"}
          control={control}
        />
        <FormInput
          label={"Email"}
          name={"email"}
          placeholder={"Ketikkan Email"}
          control={control}
        />
        <FormInput
          label={"Password"}
          name={"password"}
          type="password"
          placeholder={"Ketikkan Password"}
          control={control}
        />
      </div>
    </DefaultDrawer>
  );
};

export default DrawerInputForm;
