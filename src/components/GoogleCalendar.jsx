export default function GoogleCalendar() {
  return (
    <div>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=YOUR_TIME_ZONE"
        style={{ border: 0 }}
        width="800"
        height="300"
        frameBorder="0"
        scrolling="no"
        allowFullScreen
      ></iframe>
    </div>
  );
}
