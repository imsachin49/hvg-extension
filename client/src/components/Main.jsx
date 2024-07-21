import Announcements from "./Announcements";
import Todo from "./Todo";
import Quote from "./Quote";
import Pomodoro from "./Pomodoro";
import CustomTabsDisplay from "./CustomTabsDisplay";
import GoogleTabDisplay from "./GoogleTabs";

export default function Main() {
  return (
    <div className="p-5 rounded-md text-gray-950 flex gap-5 w-calc-100-minus-5vw">
      <div className="w-fit min-w-[600px] space-y-5">
        <Announcements />
        <GoogleTabDisplay />
      </div>
      <div className="w-fit space-y-4">
        <Todo />
        <Pomodoro />
        <Quote />
        <CustomTabsDisplay />
      </div>
    </div>
  );
}
