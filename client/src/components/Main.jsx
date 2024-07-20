import Announcements from "./Announcements";
import Todo from "./Todo";
import Quote from './Quote';

export default function Main() {
  return (
    <div className='w-[100%] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border border-green-950 p-5 rounded-md text-gray-950 flex gap-5'>
      <div className="w-fit">
        <Todo />
        <Quote/>
      </div>
      <div className="w-fit min-w-[600px]">
        <Announcements />
      </div>
    </div>
  )
}