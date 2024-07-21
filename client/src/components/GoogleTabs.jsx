import { useTabs } from "./TabsProvider";
import { IoMdClose } from "react-icons/io";
import GoogleSlides from "./GoogleSlides";
export default function GoogleTabDisplay() {
  const { googleTab, removeGoogleTab } = useTabs();

  const handleTabClick = (url) => {
    window.open(url, "_blank");
  };
  
  const handleCloseTab = (e, tab) => {
    e.stopPropagation(); 
    removeGoogleTab(tab);
  };

  return (
    <div className="flex flex-wrap ">
      {googleTab.map((tab, index) => (
        <div
          key={index}
          className="w-full relative bg-light-indigo rounded-lg overflow-hidden cursor-pointer shadow-md"
          onClick={() => handleTabClick(tab.tabUrl)}
        >
          <div className="h-full flex flex-col  p-3">
            <div className="flex text-white text-xl mb-2 justify-between">
              <button
                onClick={(e) => handleCloseTab(e, tab)}
                className="text-white hover:text-red-500 transition-colors"
              >
                <IoMdClose />
              </button>
            </div>
            <div>
              <GoogleSlides iframelink={tab.tabUrl} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}