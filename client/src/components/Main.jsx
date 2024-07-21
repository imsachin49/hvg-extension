import Announcements from "./Announcements";
import Todo from "./Todo";
import Quote from './Quote';
import Pomodoro from "./Pomodoro";
import CustomTabsDisplay from "./CustomTabsDisplay";
import GoogleWidgets from "./GoogleWidgets";

export default function Main() {
  return (
    <div className='p-5 rounded-md text-gray-950 flex flex-wrap gap-5 w-calc-100-minus-5vw'>
      <div className="w-fit">
        <Todo />
        <Quote />
        <Pomodoro />
      </div>
      <div className="w-fit min-w-[600px]">
        <Announcements />
      </div>
      <CustomTabsDisplay />
      <GoogleWidgets />
    </div>
  )
}