import React from "react";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  return (
    <>
      {" "}
      <form className="space-y-6 px-6 py-4">
        <h3 className="text-xl font-medium text-white">
          Register to LeetClone
        </h3>
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium block mb-2 text-white"
          >
            Name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            className=" border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-white border-gray-500 placeholder-gray-400 text-"
            placeholder="Kartik Gile"
          />
          <label
            htmlFor="email"
            className="text-sm font-medium block mb-2 text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className=" border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-white border-gray-500 placeholder-gray-400 text-"
            placeholder="abc@xyz.com"
          />

          <label
            htmlFor="Password"
            className="text-sm font-medium block mb-2 text-white"
          >
            Password
          </label>
          <input
            type="password"
            name="Password"
            id="Password"
            className=" border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            bg-white border-gray-500 placeholder-gray-400 text-"
            placeholder="*******"
          />
        </div>

        <button
          type="submit"
          className="w-full text-white focus:ring-blue-300 font-medium rounded-lg
                text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-brand-orange-s"
        >
          Register
        </button>

        <div className="text-sm font-medium text-gray-300">
          Already Registered?{" "}
          <a href="#" className="text-blue-700 hover:underline">
            Log in
          </a>
        </div>
      </form>
    </>
  );
};
export default Signup;
