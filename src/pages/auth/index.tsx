import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import AuthModal from "@/components/Modals/AuthModal";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";

type indexProps = {};

const AppPage: React.FC<indexProps> = () => {
  const authModal = useRecoilValue(authModalState);
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex-col text-center  items-center  text-white select-none ">
          <h1 className="text-2xl">Hello this is LeetCode Clone</h1>
          <small className="color-white">Created by @kartik0920</small>
        </div>
        {authModal.isOpen && <AuthModal />}
      </div>
    </div>
  );
};
export default AppPage;
