import React from "react";

function Profile() {
  return (
    <div className="flex justify-between">
      <div className="mt-6 pl-5 w-8/12">
        <div className="flex justify-between w-full">
          <div className="w-4/5">
            <h1 className="text-3xl font-bold text-[#6527be]">Profile</h1>
          </div>
          <div className="w-1/5 flex gap-10 justify-center items-center">
            <div className="w-fit h-fit bg-white rounded-xl">
              <img src="/tabler_edit.png" alt="" />
            </div>
            <div>
              <img src="/save-fill.png" alt="" />
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-row h-full p-1">
          <div className="w-1/2 h-full p-6">
            <div className="flex justify-start">1</div>
            <div className="flex justify-center">2</div>
          </div>
          <div className="w-1/2 h-full p-6">3</div>
        </div>
      </div>
      <div
        className="bg-[#6527be] h-full rounded-l-3xl p-6 absolute top-0 right-0 z-0 flex flex-col items-center gap-1"
        style={{ width: "28vw" }}
      >
        10
      </div>
    </div>
  );
}

export default Profile;
