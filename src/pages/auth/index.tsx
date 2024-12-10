import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/atoms/authModalAtom";
import AuthModal from "@/components/Modals/AuthModal";

type indexProps = {};
const AppPage: React.FC<indexProps> = () => {
  // const authModal = useRecoilValue(authModalState);
  console.log(useRecoilValue(authModalState));
  return (
    <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <div className="flex-col text-center  items-center  text-white select-none ">
          <h1 className="text-2xl">Hello this is LeetCode Clone</h1>
          <small className="color-white">Created by @kartik0920</small>
        </div>
      </div>
    </div>
  );
};
export default AppPage;
