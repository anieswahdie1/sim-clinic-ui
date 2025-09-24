import React from "react";
import DefaultLayout from "../../components/organism/layouts";

const WelcomePages = () => {
  return (
    <>
      <DefaultLayout>
        <div className="min-h-[75vh] min-w-[95vw] max-w-[100vw] rounded-2xl p-2 bg-white">
          Selamat Datang, Muhammad Anies Wahdie!
        </div>
      </DefaultLayout>
    </>
  );
};

export default WelcomePages;
