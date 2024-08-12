import Announcements from "./Announcements";
import Todo from "./Todo";
import Quote from "./Quote";
import Pomodoro from "./Pomodoro";
import CustomTabsDisplay from "./CustomTabsDisplay";
import GoogleTabDisplay from "./GoogleTabs";
import { useTabs } from "./TabsProvider";
import Kanban from "./kanban";

export default function Main() {
  const { googleTab, tabs } = useTabs();

  return (
    <div className="p-5 rounded-md text-gray-950 flex space-x-5 w-calc-100-minus-5vw">
      <div className="w-2/3 space-y-5">
        <Announcements />
        {googleTab.map((tab, index) => (
          <GoogleTabDisplay key={index} tab={tab} />
        ))}
        <Kanban/>
      </div>
      <div className="w-fit space-y-5">
        <Todo />
        <Pomodoro />
        <Quote />
        {tabs.map((tab, index) => (
          <CustomTabsDisplay tab={tab} key={index} />
        ))}
      </div>
    </div>
  );
}
