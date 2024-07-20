import { HiOutlineHome } from "react-icons/hi2";
import { CiChat1 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

export default function Sidebar() {
  return (
    <div className='w-[5vw] p-5 rounded-md flex flex-col justify-between items-center text-gray-100'>
      <div className="cursor-pointer">
        <HiOutlineHome size={24} />
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="cursor-pointer">
          <CiChat1 size={24} />
        </div>
        <div className="cursor-pointer">
          <CiSettings size={24} />
        </div>
      </div>
    </div>
  )
}
