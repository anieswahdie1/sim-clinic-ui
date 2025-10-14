import Header from "../../atoms/header/header";
import Footer from "../../atoms/footer/footer";
import { usePage } from "../../../stores/usePage";
import { Flex, Spin } from "antd";

const DefaultLayout = ({ children }) => {
  const isLoading = usePage((state) => state.isLoading);
  return (
    <div className="relative min-h-screen bg-primary-gray">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-primary-gray pt-[80px] pb-[60px]">
        {isLoading ? (
          <Flex align="center" gap="middle">
            <Spin size="large" />
          </Flex>
        ) : (
          children
        )}
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
