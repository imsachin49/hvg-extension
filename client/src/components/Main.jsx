import Todo from "./Todo";

export default function Main() {
  return (
    <div className='w-[95vw] h-[90vh] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] border border-green-950 p-5 rounded-md text-gray-950'>
      <div className="w-fit">
        <Todo />
      </div>
    </div>
  )
}