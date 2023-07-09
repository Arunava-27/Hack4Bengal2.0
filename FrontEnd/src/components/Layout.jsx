import React from "react";
import SideBar from "./SideBar/SideBar";

function Layout({ children }) {
  return (
    <section className="flex bg-[#e6e7ff] h-full w-full">
      <div className="relative z-10">
        <SideBar />
      </div>
      <main className="w-full relative z-0">{children}</main>
    </section>
  );
}

export default Layout;
