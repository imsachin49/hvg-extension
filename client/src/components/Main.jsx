import Announcements from "./Announcements";
import Todo from "./Todo";
import Quote from './Quote';
import Pomodoro from "./Pomodoro";
import GoogleSlides from "./GoogleSlides";
import CustomTabsDisplay from "./CustomTabsDisplay";

export default function Main() {
  return (
    <div className="p-5 rounded-md text-gray-950 flex gap-5 w-calc-100-minus-5vw">
      <div className="w-fit min-w-[600px]">
        <Announcements />
        <div className="flex items-center justify-between gap-3">
          <GoogleSlides
            iframelink={
              "https://docs.google.com/presentation/d/e/2PACX-1vRY-808B0ew4-ixrGF5ggzOA5xTGFxd3ngcCr1MJP_X9T11vywRMiFUZHArzfJxDj20DyDqX7OlEiot/embed?start=true&loop=true&delayms=3000"
            }
          />
        </div>
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