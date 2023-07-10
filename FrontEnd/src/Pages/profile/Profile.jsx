import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function Profile() {

  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [alternativeMobileNumber, setAlternativeMobile] = useState("");
  const [address, setAddress] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [pgName , setPgName] = useState("");
  const [admittedDate, setAdmittedDate] = useState("");
  const [checkbox, setCheckbox] = useState(false);


  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(e.target.value);

    const user = {
      fname,
      lname,
      mobile,
      alternativeMobileNumber,
      address,
      sex,
      age,
      weight,
      height,
      bloodGroup,
      pgName,
      admittedDate,
      checkbox,
    };

    fetch("http://34.172.160.240:3001/api/v1/profileupdate", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))  
      .then(() => {
        navigate("/app/profile");
      }
      )
      .catch((error) => {
        console.error("Error:", error);
      }
      );
  };

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
            <div onClick={handleSubmit}>
              <img src="/save-fill.png" alt="" />
            </div>
          </div>
        </div>
        <div className=" flex flex-col h-full p-1">
          <div className="w-1/2 h-full p-3">
            <div className="flex justify-start">
              <div>
                <img src="/user.png" alt="" className="" />
                <button className="relative bottom-14 left-36">
                  <img src="/tabler_upload.png" alt="" className="w-10 h-10" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col">
            <form action="POST">
              <div className="flex w-full">
                <div className="w-1/2 h-96 -mt-20 flex flex-col relative justify-around gap-16">
                  <div className="flex flex-col">
                    <label
                      htmlFor=""
                      className="-mt-7 ml-7 text-lg font-normal text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      value={fname}
                      onChange={(e) => setFirstName(e.target.value)}
                      type="text"
                      className="bg-white shadow-[4px_-4px_10px_#6527be69] h-[56px] fixed w-[355px] rounded-[50px] p-5 focus:outline-none hover:ring-violet-300 focus:ring-violet-400 focus:ring-4 hover:ring-4 text-[#6527be] font-bold text-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <label
                      htmlFor=""
                      className="-mt-7 ml-7 text-lg font-normal text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                      value={lname}
                      onChange={(e) => setLastName(e.target.value)}
                      type="text"
                      className="bg-white shadow-[4px_-4px_10px_#6527be69] h-[56px] fixed w-[355px] rounded-[50px] p-5 focus:outline-none hover:ring-violet-300 focus:ring-violet-400 focus:ring-4 hover:ring-4 text-[#6527be] font-bold text-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <label
                      htmlFor=""
                      className="-mt-7 ml-7 text-lg font-normal text-gray-500"
                    >
                      Mobile Number
                    </label>
                    <input
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      type="text"
                      className="bg-white shadow-[4px_-4px_10px_#6527be69] h-[56px] fixed w-[355px] rounded-[50px] p-5 focus:outline-none hover:ring-violet-300 focus:ring-violet-400 focus:ring-4 hover:ring-4 text-[#6527be] font-bold text-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <label
                      htmlFor=""
                      className="-mt-7 ml-7 text-lg font-normal text-gray-500"
                    >
                      Alternate Mobile Number
                    </label>
                    <input
                      value={alternativeMobileNumber}
                      onChange={(e) => setAlternativeMobile(e.target.value)}
                      type="text"
                      className="bg-white shadow-[4px_-4px_10px_#6527be69] h-[56px] fixed w-[355px] rounded-[50px] p-5 focus:outline-none hover:ring-violet-300 focus:ring-violet-400 focus:ring-4 hover:ring-4 text-[#6527be] font-bold text-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <label
                      htmlFor=""
                      className="-mt-7 ml-7 text-lg font-normal text-gray-500"
                    >
                      Patient Gurdian
                    </label>
                    <input
                      value={pgName}
                      onChange={(e) => setPgName(e.target.value)}
                      type="text"
                      className="bg-white shadow-[4px_-4px_10px_#6527be69] h-[56px] fixed w-[355px] rounded-[50px] p-5 focus:outline-none hover:ring-violet-300 focus:ring-violet-400 focus:ring-4 hover:ring-4 text-[#6527be] font-bold text-xl"
                    />
                  </div>
                </div>
                <div className="w-1/2  flex flex-col justify-between">
                  <div className="flex flex-row w-full -mt-60">
                    <div className="flex flex-col w-1/2 justify-center items-center">
                      <label
                        htmlFor=""
                        className="-mt-24 -ml-28 text-lg font-normal text-gray-500"
                      >
                        Age
                      </label>
                      <input
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        type="text"
                        className="bg-white shadow-[4px_-4px_10px_#6527be69] h-[56px] fixed w-[200px] rounded-[50px] p-5 focus:outline-none hover:ring-violet-300 focus:ring-violet-400 focus:ring-4 hover:ring-4 text-[#6527be] font-bold text-xl"
                      />
                    </div>
                    <div className="flex flex-col gap-6 w-1/2 justify-center items-center">
                      <label
                        htmlFor=""
                        className="-mt-24 -ml-24 text-lg font-normal text-gray-500"
                      >
                        Weight
                      </label>
                      <input
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        type="text"
                        className="bg-white shadow-[4px_-4px_10px_#6527be69] h-[56px] fixed w-[200px] rounded-[50px] p-5 focus:outline-none hover:ring-violet-300 focus:ring-violet-400 focus:ring-4 hover:ring-4 text-[#6527be] font-bold text-xl"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row w-full -mt-20">
                    <div className="flex flex-col w-1/2 justify-center items-center">
                      <label
                        htmlFor=""
                        className="-mt-24 -ml-28 text-lg font-normal text-gray-500"
                      >
                        Sex
                      </label>
                      <input
                        value={sex}
                        onChange={(e) => setSex(e.target.value)}
                        type="text"
                        className="bg-white shadow-[4px_-4px_10px_#6527be69] h-[56px] fixed w-[200px] rounded-[50px] p-5 focus:outline-none hover:ring-violet-300 focus:ring-violet-400 focus:ring-4 hover:ring-4 text-[#6527be] font-bold text-xl"
                      />
                    </div>
                    <div className="flex flex-col w-1/2 justify-center items-center">
                      <label
                        htmlFor=""
                        className="-mt-24 -ml-12 text-lg font-normal text-gray-500"
                      >
                        Blood Group
                      </label>
                      <input
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                        type="text"
                        className="bg-white shadow-[4px_-4px_10px_#6527be69] h-[56px] fixed w-[200px] rounded-[50px] p-5 focus:outline-none hover:ring-violet-300 focus:ring-violet-400 focus:ring-4 hover:ring-4 text-[#6527be] font-bold text-xl"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col -mt-20">
                    <label
                      htmlFor=""
                      className="-mt-14  ml-11 text-lg font-normal text-gray-500"
                    >
                      Height
                    </label>
                    <input
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      type="text"
                      className="bg-white -mt-6 ml-5 shadow-[4px_-4px_10px_#6527be69] h-[56px] fixed w-[437px] rounded-[50px] p-5 focus:outline-none hover:ring-violet-300 focus:ring-violet-400 focus:ring-4 hover:ring-4 text-[#6527be] font-bold text-xl"
                    />
                  </div>
                  <div className="flex flex-col -mt-20 -mb-18">
                    <label
                      htmlFor=""
                      className="-mt-14  ml-11 text-lg font-normal text-gray-500"
                    >
                      Admitted On.
                    </label>
                    <input
                      value={admittedDate}
                      onChange={(e) => setAdmittedDate(e.target.value)}
                      type="text"
                      className="bg-white -mt-6 ml-5 shadow-[4px_-4px_10px_#6527be69] h-[56px] fixed w-[437px] rounded-[50px] p-5 focus:outline-none hover:ring-violet-300 focus:ring-violet-400 focus:ring-4 hover:ring-4 text-[#6527be] font-bold text-xl"
                    />
                  </div>
                  <div className="flex flex-col mb-32 -mt-20">
                    <label
                      htmlFor=""
                      className="-mt-14  ml-11 text-lg font-normal text-gray-500"
                    >
                      Address
                    </label>
                    <input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      type="text"
                      className="bg-white -mt-6 ml-5 shadow-[4px_-4px_10px_#6527be69] h-[110px] fixed w-[437px] rounded-[35px] p-5 focus:outline-none hover:ring-violet-300 focus:ring-violet-400 focus:ring-4 hover:ring-4 text-[#6527be] font-bold text-xl"
                    />
                  </div>
                  <div className="absolute mt-72 ml-8 flex">
                    <div className=" bg-white h-[31px] w-[31px] border-[3px] border-solid border-[#6527be]">
                      <input
                        value={checkbox}
                        onChange={(e) => setCheckbox(e.target.value)}
                        type="checkbox"
                        name=""
                        id=""
                        className="w-full h-full"
                      />
                    </div>
                    <span className=" ml-5 text-[#666666] text-xl font-semibold">Check this box to agree to the terms <br/>and conditions of the hospital authority.</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
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
