import Header from "../../atoms/header/header";
import Footer from "../../atoms/footer/footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-primary-gray">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-primary-gray pt-[80px] pb-[60px]">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
