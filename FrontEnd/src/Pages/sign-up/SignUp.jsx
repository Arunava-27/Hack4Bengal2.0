import React from "react";

function SignUp() {
  return (
    <div className="fixed z-0 w-screen h-screen bg-violet-100 bg-opacity-70 flex justify-end">
      <div className="absolute z-30 bg-transparent w-3/4 h-full flex justify-between items-center p-12">
        <div className="">
          <h1 className="text-transparent text-6xl font-bold h-16 w-full flex justify-end">
            <span className=" text-white">Med</span>
            <span className=" text-teal-400">Sy</span>
          </h1>
        </div>
        <div className=" mr-16">
          <div className=" relative h-[607px] w-[550px] border-0 border-none bg-white shadow-[4px_-4px_10px_#6527be78] rounded-2xl ">
            <div className="w-full flex justify-center h-fit">
              <h1 className="text-transparent text-5xl font-bold h-[38px] mt-28">
                <span className=" text-violet-700">Welcome !</span>
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-16  mt-20">
              <div className="flex flex-row justify-center w-full">
                <input
                  type="mail"
                  className="bg-white shadow-[inset_0px_4px_10px_#00000040] h-[55px] w-[360px] rounded-[10px] p-5 focus:outline-none hover:ring-violet-300 focus:ring-violet-400 focus:ring-4 hover:ring-4 text-[#6527be] font-bold text-xl"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-row justify-center w-full">
                <input
                  type="password"
                  className="bg-white shadow-[inset_0px_4px_10px_#00000040] h-[55px] w-[360px] rounded-[10px] p-5 focus:outline-none hover:ring-violet-300 focus:ring-violet-400 focus:ring-4 hover:ring-4 text-[#6527be] font-bold text-xl"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-16  mt-20">
              <div className="flex flex-row justify-center w-full">
                <button className="bg-[#45cfdd] h-[61px] fixed w-[181px] rounded-[10px]">
                  <span className="text-[#6527be] text-2xl font-medium h-[29px] text-center w-[148px]">
                    Sign Up
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 w-1/2 h-full bg-violet-800 rounded-full -mr-[25rem] shadow-[-4px_0px_6px_5px_rgba(0,0,0,0.4)]" />
      <div className="relative z-20 w-1/2 h-full bg-violet-800"></div>
    </div>
  );
}

export default SignUp;
