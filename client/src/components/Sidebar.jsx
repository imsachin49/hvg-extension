import { HiOutlineHome } from "react-icons/hi2";
import { CiSettings } from "react-icons/ci";
import { AiOutlineOpenAI } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { ModalComp } from "./Modal";
import { useState } from "react";

export default function Sidebar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className='w-[5vw] max-h-[90vh] p-5 rounded-md flex flex-col justify-between items-center text-gray-100 sticky top-5 left-0'>
      <div className="cursor-pointer">
        <HiOutlineHome size={28} />
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="cursor-pointer" onClick={() => setOpenModal(!openModal)}>
          <IoMdAdd size={28} />
        </div>
        <a href="https://chatgpt.com/" className="cursor-pointer">
          <AiOutlineOpenAI size={28} />
        </a>
        <div className="cursor-pointer">
          <CiSettings size={28} />
        </div>
      </div>
      <ModalComp openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  )
}