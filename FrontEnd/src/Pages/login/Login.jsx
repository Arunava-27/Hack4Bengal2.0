import React from "react";

function Login() {
  return (
    <div className="bg-[#e6e7ffb2] w-screen h-screen flex">
      <div className="w-full flex items-center">
        <div className="fixed z-0 h-full w-full border-0 border-none bg-[#6527be] shadow-[10px_0px_10px_#6527be] rounded-full -ml-[68rem]"></div>
        <div className="relative z-10 h-16 w-3/12">
          <h1 className="text-transparent text-6xl font-bold h-16 -right-5 tracking-normal whitespace-nowrap w-full flex justify-end">
            <span className=" text-white">Med</span>
            <span className=" text-teal-400">Sy</span>
          </h1>
        </div>
        <div className="w-7/12 flex justify-end">
          <div className=" relative z-20 h-[607px] w-[550px] border-0 border-none bg-white shadow-[4px_-4px_10px_#6527be78] rounded-2xl ">
            <div className="w-full flex justify-center  mt-28 h-fit">
              <h1 className="text-transparent text-5xl font-bold h-[38px] tracking-[0] leading-[normal] whitespace-nowrap">
                <span className=" text-violet-700">Welcome</span>
                <span className=" text-teal-400"> Back!</span>
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
                  <span className="text-[#6527be] text-2xl font-medium h-[29px] text-center w-[148px]">Sign In</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
