import React from "react";

function Notification() {
  return (
    <div className="flex flex-col absolute bg-white border border-violet-700 min-w-fit rounded-lg p-2 top-20">
      <ul className="flex flex-col gap-4">
        <li>You have a new patient</li>
        <li>Check on bed 4 room C2</li>
        <li>Patient JKLM321 is released</li>
      </ul>
    </div>
  );
}

export default Notification;
