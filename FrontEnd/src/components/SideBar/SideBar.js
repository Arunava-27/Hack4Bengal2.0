import React from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiDashboardFill } from "react-icons/ri";
import { BsClipboardPulse } from "react-icons/bs";
import { BiStats } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiFillMessage, AiFillSetting } from "react-icons/ai";

function SideBar() {
  const [active, setActive] = React.useState(false);
  const [selected, setSelected] = React.useState("Dashboard");

  return (
    <div
      className={`bg-[#fff] h-screen ${
        active ? "w-72" : "w-16"
      } duration-500 px-4 py-5 flex flex-col justify-between`}
    >
      <div>
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            className={`text-3xl text-[#6527be] ${
              active ? "mr-4" : ""
            } cursor-pointer`}
            size={26}
            onClick={() => setActive(!active)}
          />
        </div>
        <div className=" top-20 flex flex-col gap-4 relative">
          <Link
            to={"dash-board"}
            className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-violet-100 rounded-md`}
          >
            <div>
              {React.createElement(RiDashboardFill, {
                size: 26,
                className: `${
                  selected === "Dashboard" ? "text-[#6527be]" : "text-[#666666]"
                } ${active ? "mr-4" : ""}`,
                onClick: () => setSelected("Dashboard"),
              })}
            </div>
            <h2
              style={{ transitionDelay: `${0 * 2}00ms` }}
              className={`${
                selected === "Dashboard"
                  ? `text-[#6527be] whitespace-pre duration-500 ${
                      !active && "opacity-0 translate-x-28 overflow-hidden"
                    }`
                  : `text-[#666666] whitespace-pre duration-500 ${
                      !active && "opacity-0 translate-x-28 overflow-hidden"
                    }`
              }`}
              onClick={() => setSelected("Dashboard")}
            >
              Dashboard
            </h2>
            <h2
              className={` ${
                active ? " hidden" : ""
              } absolute left-48 bg-white font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              Dashboard
            </h2>
          </Link>
          <Link
            to={"schedule"}
            className={` group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-violet-100 rounded-md`}
          >
            <div>
              {React.createElement(BsClipboardPulse, {
                size: 26,
                className: `${
                  selected === "Schedule" ? "text-[#6527be]" : "text-[#666666]"
                } ${active ? "mr-4" : ""}`,
                onClick: () => setSelected("Schedule"),
              })}
            </div>
            <h2
              style={{ transitionDelay: `${1 * 1}00ms` }}
              className={`${
                selected === "Schedule"
                  ? `text-[#6527be] whitespace-pre duration-500 ${
                      !active && "opacity-0 translate-x-28 overflow-hidden"
                    }`
                  : `text-[#666666] whitespace-pre duration-500 ${
                      !active && "opacity-0 translate-x-28 overflow-hidden"
                    }`
              }`}
              onClick={() => setSelected("Schedule")}
            >
              Schedule
            </h2>
            <h2
              className={` ${
                active ? " hidden" : ""
              } absolute left-48 bg-white font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              Schedule
            </h2>
          </Link>
          <Link
            to={"stats"}
            className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-violet-100 rounded-md`}
          >
            <div>
              {React.createElement(BiStats, {
                size: 26,
                className: `${
                  selected === "Stats" ? "text-[#6527be]" : "text-[#666666]"
                } ${active ? "mr-4" : ""}`,
                onClick: () => setSelected("Stats"),
              })}
            </div>
            <h2
              style={{ transitionDelay: `${2 * 1}00ms` }}
              className={`${
                selected === "Stats"
                  ? `text-[#6527be] whitespace-pre duration-500 ${
                      !active && "opacity-0 translate-x-28 overflow-hidden"
                    }`
                  : `text-[#666666] whitespace-pre duration-500 ${
                      !active && "opacity-0 translate-x-28 overflow-hidden"
                    }`
              }`}
              onClick={() => setSelected("Stats")}
            >
              Stats
            </h2>
            <h2
              className={` ${
                active ? " hidden" : ""
              } absolute left-48 bg-white font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              Stats
            </h2>
          </Link>
          <Link
            to={"profile"}
            className={` group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-violet-100 rounded-md`}
          >
            <div>
              {React.createElement(CgProfile, {
                size: 26,
                className: `${
                  selected === "Profile" ? "text-[#6527be]" : "text-[#666666]"
                } ${active ? "mr-4" : ""}`,
                onClick: () => setSelected("Profile"),
              })}
            </div>
            <h2
              style={{ transitionDelay: `${3 * 1}00ms` }}
              className={`${
                selected === "Profile"
                  ? `text-[#6527be] whitespace-pre duration-500 ${
                      !active && "opacity-0 translate-x-28 overflow-hidden"
                    }`
                  : `text-[#666666] whitespace-pre duration-500 ${
                      !active && "opacity-0 translate-x-28 overflow-hidden"
                    }`
              }`}
              onClick={() => setSelected("Profile")}
            >
              Profile
            </h2>
            <h2
              className={` ${
                active ? " hidden" : ""
              } absolute left-48 bg-white font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              Profile
            </h2>
          </Link>
          <Link
            to={"message"}
            className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-violet-100 rounded-md`}
          >
            <div>
              {React.createElement(AiFillMessage, {
                size: 26,
                className: `${
                  selected === "Message" ? "text-[#6527be]" : "text-[#666666]"
                } ${active ? "mr-4" : ""}`,
                onClick: () => setSelected("Message"),
              })}
            </div>
            <h2
              style={{ transitionDelay: `${4 * 1}00ms` }}
              className={`${
                selected === "Message"
                  ? `text-[#6527be] whitespace-pre duration-500 ${
                      !active && "opacity-0 translate-x-28 overflow-hidden"
                    }`
                  : `text-[#666666] whitespace-pre duration-500 ${
                      !active && "opacity-0 translate-x-28 overflow-hidden"
                    }`
              }`}
              onClick={() => setSelected("Message")}
            >
              Message
            </h2>
            <h2
              className={` ${
                active ? " hidden" : ""
              } absolute left-48 bg-white font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
            >
              Message
            </h2>
          </Link>
        </div>
      </div>
      <Link
        to={"settings"}
        className={`mt-5 group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-violet-100 rounded-md`}
      >
        <div>
          {React.createElement(AiFillSetting, {
            size: 26,
            className: `${
              selected === "Settings" ? "text-[#6527be]" : "text-[#666666]"
            } ${active ? "mr-4" : ""}`,
            onClick: () => setSelected("Settings"),
          })}
        </div>
        <h2
          style={{ transitionDelay: `${5 * 1}00ms` }}
          className={`${
                selected === "Settings"
                  ? `text-[#6527be] whitespace-pre duration-500 ${
                      !active && "opacity-0 translate-x-28 overflow-hidden"
                    }`
                  : `text-[#666666] whitespace-pre duration-500 ${
                      !active && "opacity-0 translate-x-28 overflow-hidden"
                    }`
              }`}
              onClick={() => setSelected("Settings")}
        >
          Settings
        </h2>
        <h2
          className={` ${
            active ? " hidden" : ""
          } absolute left-48 bg-white font-semibold whitespace-pre rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
        >
          Settings
        </h2>
      </Link>
    </div>
  );
}

export default SideBar;
