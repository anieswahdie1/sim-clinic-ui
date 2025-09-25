import DefaultLayout from "../../components/organism/layouts";
import useAuth from "../../stores/useAuth";

const WelcomePages = () => {
  const username = useAuth((state) => state.username);
  return (
    <>
      <DefaultLayout>
        <div className="min-h-[75vh] min-w-[95vw] max-w-[100vw] rounded-2xl p-2 bg-white">
          Selamat Datang, {username}!
        </div>
      </DefaultLayout>
    </>
  );
};

export default WelcomePages;
