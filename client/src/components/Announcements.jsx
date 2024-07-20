import { TbArrowsSort } from "react-icons/tb";
import Announcement from "./Announcement";
// import { announcementData } from "../data";

export default function Announcements() {
  return (
    <div className="text-black bg-white rounded-md p-[5px] pb-5 max-h-[290px] overflow-auto min-w-[600px] w-fit">
      <div className="flex items-center justify-between mx-2 border-b mb-2 sticky top-[-6px] bg-white">
        <div className="py-1 text-xl text-gray-900">Recent Announcements</div>
        <div className="inline-flex items-center gap-1 cursor-pointer border border-gray-200 px-2 py-[2px] rounded-full"><TbArrowsSort />Sort By</div>
      </div>
      <div className="flex flex-col gap-[4px]">
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
      </div>
    </div>
  )
}