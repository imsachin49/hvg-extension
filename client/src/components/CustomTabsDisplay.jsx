import { useTabs } from "./TabsProvider";

export default function CustomTabsDisplay() {
    const { tabs } = useTabs();

    const handleTabClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <div className="flex flex-wrap gap-4">
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className="relative w-[300px] p-2 bg-transparent text-white rounded-lg cursor-pointer"
                    onClick={() => handleTabClick(tab.tabUrl)}
                >
                    <iframe
                        src={tab.tabUrl}
                        title={tab.tab}
                        width="285px"
                        height="200px"
                        className="rounded-md"
                        allowFullScreen
                    />
                    <button
                        className="absolute inset-0 bg-transparent cursor-pointer"
                        onClick={() => handleTabClick(tab.tabUrl)}
                        aria-label={`Open ${tab.tab}`}
                    />
                </div>
            ))}
        </div>
    );
}
