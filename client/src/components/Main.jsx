import Announcements from "./Announcements";
import Todo from "./Todo";
import Quote from './Quote';
import Pomodoro from "./Pomodoro";
import GoogleSlides from "./GoogleSlides";
import CustomTabsDisplay from "./CustomTabsDisplay";

export default function Main() {
  return (
    <div className="p-5 rounded-md text-gray-950 flex flex-wrap gap-5 w-calc-100-minus-5vw">
      <div className="w-fit min-w-[600px] space-y-5">
        <Announcements />
        <CustomTabsDisplay />
        <div className="flex items-center justify-between gap-3">
          <GoogleSlides />
        </div>
      </div>
      <div className="w-fit">
        <Todo />
        <Pomodoro />
        <Quote />
      </div>
    </div>
  );
}