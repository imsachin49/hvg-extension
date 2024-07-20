import { PiTriangleFill } from "react-icons/pi";
import { formatDateTime } from "../utils/dateFormat";

export default function Announcement({ item }) {
    return (
        <div className="flex items-center gap-3 text-sm justify-between px-1 rounded-md cursor-pointer">
            <div className="flex items-center">
                {/*<img className="h-12 w-12 rounded-full" src="https://ph-files.imgix.net/f376dd18-8354-4b8b-afa6-0f8d394b5283.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=48&h=48&fit=crop&dpr=1" />*/}
                <div className="flex flex-col gap-[2px] p-1 w-full">
                    <div className="flex text-md">
                        <strong className="capitalize">{item?.name}</strong>
                        <span>- {item?.announcement}</span>
                    </div>
                    <ul className="flex items-center gap-2">
                        <li className="text-xs text-white border border-gray-200 rounded-md px-[6px] py-[2px] bg-indigo-600">{formatDateTime(item?.date)}</li>
                        <li className="text-xs text-gray-500 border border-gray-200 rounded-md px-[6px] py-[2px]">Artificial Intelligence</li>
                        <li className="text-xs text-gray-500 border border-gray-200 rounded-md px-[6px] py-[2px]">Spreadsheets</li>
                        <li className="text-xs text-gray-500 border border-gray-200 rounded-md px-[6px] py-[2px]">Sales</li>
                    </ul>
                </div>
            </div>
            <div className="border rounded-md flex items-center justify-center flex-col px-2 py-1 text-gray-700 cursor-pointer">
                <PiTriangleFill />
                <span className="">250</span>
            </div>
        </div>
    )
}