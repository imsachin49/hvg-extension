/* eslint-disable react/prop-types */
import { useTabs } from "./TabsProvider";
import { IoMdClose } from "react-icons/io";
import GoogleSlides from "./GoogleSlides";

export default function GoogleTabDisplay({ tab }) {
  const { removeGoogleTab } = useTabs();

  const handleTabClick = (url) => {
    window.open(url, "_blank");
  };

  const handleCloseTab = (e, tab) => {
    e.stopPropagation();
    removeGoogleTab(tab);
  };

  return (
    <div
      className="w-[47rem] relative bg-[#1c3232] rounded-lg overflow-hidden cursor-pointer shadow-md"
      onClick={() => handleTabClick(tab.tabUrl)}
    >
      <div className="h-full flex flex-row-reverse p-3">
        <div className="flex text-white text-xl justify-between absolute top-2">
          <button
            onClick={(e) => handleCloseTab(e, tab)}
            className="text-white hover:text-red-500 transition-colors"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="mt-4">
          <GoogleSlides iframelink={tab.tabUrl} />
        </div>
      </div>
    </div>
  );
}
