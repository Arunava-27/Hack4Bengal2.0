import React from "react";
import { IoMdNotifications } from "react-icons/io";
import Notification from "../../components/notification/notification";
import Dropdown from "../../components/Dropdown/Dropdown";
import { AiFillRightSquare, AiFillHeart } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import Calender from "react-calendar";
// import WaveChart from "../../components/WaveChart/WaveChart";
import RadialChart from "../../components/RadialChart/RadialChart";
import StatisticsChart from "../../components/StatisticsChart/StatisticsChart";
import "react-calendar/dist/Calendar.css";

function Dashboard() {
  const date = new Date();
  const [selectedDate, setSelectedDate] = React.useState(date.getDate());
  const [selectedMonth, setSelectedMonth] = React.useState(date.getMonth());
  const [selectedYear, setSelectedYear] = React.useState(date.getFullYear());
  const [openNotification, setOpenNotification] = React.useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date.getDate());
    setSelectedMonth(date.getMonth());
    setSelectedYear(date.getFullYear());
  };

  // const handleMonthChange = (month) => {
  //   setSelectedMonth(month);
  // };

  // const handleYearChange = (year) => {
  //   setSelectedYear(year);
  // };

  // const handleTodayClick = () => {
  //   const date = new Date();
  //   setSelectedDate(date.getDate());
  //   setSelectedMonth(date.getMonth());
  //   setSelectedYear(date.getFullYear());
  // };

  const value = new Date(selectedYear, selectedMonth, selectedDate);

  return (
    <div className="bg-[#e6e7ff] w-full ">
      <div className="flex justify-between h-full">
        <div className="mt-6 pl-5 w-8/12 relative z-10">
          <div className="flex justify-between w-full">
            <div className="w-4/5">
              <h1 className="text-3xl font-bold text-[#6527be]">
                Patient Portfolio
              </h1>
            </div>
            <div className="w-1/5 flex gap-10">
              <div>
                <div
                  className="flex bg-white h-10 w-10 justify-center items-center rounded-lg cursor-pointer"
                  onClick={() => setOpenNotification(!openNotification)}
                >
                  <IoMdNotifications size={32} className="text-[#6527be]" />
                </div>
                {openNotification && <Notification />}
              </div>
              <div>
                <Dropdown
                  nameone="Today"
                  nametwo="yesterday"
                  namethree="Select Date"
                  namefour="Generate Report"
                />
              </div>
            </div>
          </div>
          <div className="bg-white shadow-[4px_-4px_10px_#6527be69] rounded-full w-fit h-fit mt-7 mb-4 text-center">
            <p className="text-[#66f] font-medium w-72">
              Vitals Last Checked By: Pinaki Das
            </p>
          </div>
          <div className="mt-3 flex flex-col gap-3">
            <div className="w-full bg-white flex flex-row justify-between shadow-[4px_-4px_10px_#6527be69] rounded-lg pr-10 pl-5 pt-2 pb-2 ">
              <div className=" mt-3 flex flex-col w-3/4">
                <h1 className="text-[#0fb3c3] text-3xl font-bold">
                  Wade Warren
                </h1>
                <div className="flex flex-col">
                  <div className="flex justify-start gap-3 mt-1 text-[#666666bf]">
                    <span>49 yrs</span>
                    <span>M</span>
                    <span>Admitted on: 10/07/23</span>
                  </div>
                  <div className="text-[#666666bf]">Tests due: Hb%, TC, DC</div>
                </div>
                <div className="flex justify-start mt-5">
                  <div className="flex gap-3 justify-center items-center">
                    <span className="text-[#6527be] text-lg font-bold">
                      View History
                    </span>
                    <span>
                      <AiFillRightSquare size={32} className="text-[#6527be]" />
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src="/medic-image-one.svg" alt="" />
              </div>
            </div>
            <div className="flex justify-between gap-3 h-40 mt-1">
              <div className=" w-1/3 bg-white shadow-[4px_-4px_10px_#6527be69] rounded-lg p-4">
                <div className="flex justify-center items-center bg-[#FFDEDE] w-12 h-12 rounded-lg">
                  <img src="/Vector.svg" alt="" />
                </div>
              </div>
              <div className=" w-1/3 bg-white shadow-[4px_-4px_10px_#6527be69] rounded-lg p-4">
                <div className="flex justify-center items-center bg-[#FFDEDE] w-12 h-12 rounded-lg">
                  <img src="/blood-drop.svg" alt="" />
                </div>
              </div>
              <div className=" w-1/3 bg-white shadow-[4px_-4px_10px_#6527be69] rounded-lg p-4">
                <div className="flex justify-center items-center bg-[#FFDEDE] w-12 h-12 rounded-lg">
                  <AiFillHeart size={40} className=" text-orange-600" />
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-3 mt-1">
              <div className="flex flex-col w-2/4 gap-3">
                <div className="h-fit bg-white shadow-[4px_-4px_10px_#6527be69] rounded-xl">
                  {/* <WaveChart/> */}
                  <img src="/crt.png" alt="" className="w-full h-28" />
                </div>
                <div className="h-28 bg-white shadow-[4px_-4px_10px_#6527be69] rounded-lg flex justify-between absolute mt-32 w-[472px]">
                <div className="w-full h-full flex justify-center items-center">
                  <p>
                    <span className=" text-lg font-semibold text-violet-700">Overall Health Score</span> <br /> <span>80%</span>
                  </p>
                </div>
                  <RadialChart />
                </div>
              </div>
              <div className="w-2/4 bg-white h-60 shadow-[4px_-4px_10px_#6527be69] rounded-lg">
                <StatisticsChart/>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-[#6527be] h-full rounded-l-3xl p-6 absolute top-0 right-0 z-0 flex flex-col items-center gap-1"
          style={{ width: "28vw" }}
        >
          <div className=" relative w-5/6 flex flex-col h-2/5 gap-2 bg-[#6527be] border shadow-[0px_6px_6px_#00000040] rounded-3xl border-solid border-[#e6e7ff] p-7">
            <div className="flex flex-col mb-2">
              <div className="flex justify-center">
                <img
                  src="/userOne.svg"
                  alt="user"
                  className="rounded-full shadow-lg"
                />
              </div>
              <div className="flex justify-center">
                <h1 className="text-white text-2xl font-bold text-center mt-3">
                  Wade Warren
                </h1>
              </div>
            </div>
            <div className="flex gap-4 w-full h-full justify-center items-center">
              <div className="w-1/3 h-fit bg-[#9681eb] rounded-xl flex flex-col justify-center items-center p-2">
                <img
                  src="/icon-park-outline_weight.svg"
                  alt=""
                  className="h-10 w-10"
                />
                <div className="text-[#f8f8f8] text-lg font-bold text-center">
                  70
                </div>
              </div>
              <div className="w-1/3 h-fit bg-[#9681eb] rounded-xl flex flex-col justify-center items-center p-2">
                <img
                  src="/akar-icons_height.svg"
                  alt=""
                  className="h-10 w-10"
                />
                <div className="text-[#f8f8f8] text-lg font-bold text-center">
                  5’10”
                </div>
              </div>
              <div className="w-1/3 h-fit bg-[#9681eb] rounded-xl flex flex-col justify-center items-center p-2">
                <img
                  src="/octicon_sign-out-16.svg"
                  alt=""
                  className="h-11 w-11"
                />
                <div className="text-[#f8f8f8] text-md font-bold text-center">
                  Logout
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-2/4 bg-[#6527be] border shadow-[0px_6px_6px_#00000040] rounded-3xl border-solid border-[#e6e7ff] flex justify-center items-center p-3 mt-2">
            <Calender
              className="w-full h-full rounded-2xl"
              onChange={handleDateChange}
              ActiveStartDate={new Date(2023, 6, 10)}
              value={value}
            />
          </div>
          <div className="w-full text-center flex justify-center items-center p-3 mt-1">
            <button className="bg-[#45cfdd] flex p-3 justify-center items-center rounded-lg hover:bg-[#93dae2]">
              <FaPlus size={20} className="text-white mr-2" />
              Add Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
