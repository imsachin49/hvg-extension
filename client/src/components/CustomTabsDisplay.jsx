import { useTabs } from "./TabsProvider";
import { TfiNewWindow } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
export default function CustomTabsDisplay() {
  const { tabs, removeTab } = useTabs();

  const handleTabClick = (url) => {
    window.open(url, "_blank");
  };
  
  const handleCloseTab = (e, tab) => {
    e.stopPropagation(); 
    removeTab(tab);
  };

  return (
    <div className="flex flex-wrap gap-4">
      {tabs.map((tab, index) => (
        <div
          key={index}
          className="w-full relative bg-light-indigo rounded-lg overflow-hidden cursor-pointer shadow-md"
        >
          <div className="h-full flex flex-col  p-3">
            <div className="flex  text-white text-xl mb-2 justify-between">
              <h3 className="text-white text-sm font-bold mb-1">{tab.tab}</h3>
              <button
                onClick={(e) => handleCloseTab(e, tab)}
                className="text-white hover:text-red-500 transition-colors"
              >
                <IoMdClose />
              </button>
            </div>
            <div>
              <p
                className="flex justify-between items-center text-gray-300 text-xs"
                onClick={() => handleTabClick(tab.tabUrl)}
              >
                {new URL(tab.tabUrl).hostname}
                <TfiNewWindow />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}