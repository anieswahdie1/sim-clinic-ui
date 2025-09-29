import axiosInstance from "../middleware/instances";

const getList = async () => {
  const result = {
    success: false,
    data: undefined,
    code: undefined,
  };

  try {
    const res = await axiosInstance.get("/users");
    if (res?.status === 200) {
      result.success = true;
      result.data = res?.data?.data;
      result.code = res?.status;
    }
  } catch (error) {
    result.success = error?.response?.data?.success;
    result.data = error?.response?.data?.error;
    result.code = error?.status;
  }

  return result;
};

const userApi = {
  getList,
};

export default userApi;
