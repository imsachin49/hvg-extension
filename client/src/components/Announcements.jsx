import { TbArrowsSort } from "react-icons/tb";
import Announcement from "./Announcement";
import { useEffect, useState,useMemo } from "react";
import { API_URL,WEBSOCKET_URL } from "../../config";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const ws = useMemo(() => new WebSocket(WEBSOCKET_URL), []);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      const res = await fetch(`${API_URL}/api/announcement`);
      const data = await res.json();
      // const sortedData = data?.data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setAnnouncements(data.data);
      // console.log("Sorted data", data.data);
    };
    fetchAnnouncements();
  }, []);

  useEffect(() => {
    ws.onopen = () => {
      console.log("Connected to WebSocket server");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }, [ws]);

  ws.onmessage = (event) => {
    const newAnnouncement = JSON.parse(event.data);
    setAnnouncements((prevAnnouncements) => [newAnnouncement, ...prevAnnouncements]);
    console.log("New announcement received:", newAnnouncement);
  };

  ws.onclose = () => {
    console.log("Disconnected from WebSocket server");
  };

  return (
    <div className="text-white bg-light-teal rounded-md pb-1 max-h-72 overflow-auto no-scrollbar min-w-[700px] w-fit">
      <div className="flex items-center justify-between p-2 px-4 border-b mb-2 sticky top-0 bg-zinc-500">
        <div className="py-1 text-xl z-90">Recent Announcements</div>
        <div className="inline-flex items-center gap-1 cursor-pointer border border-gray-100 px-2 py-[2px] rounded-full">
          <TbArrowsSort />
          Sort By
        </div>
      </div>
      <div className="flex flex-col gap-1 px-2">
        {announcements?.map((item, idx) => (
          <div key={idx}>
            <Announcement item={item} />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
