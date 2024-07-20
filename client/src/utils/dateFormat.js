export function formatDateTime(dateTimeString) {
    // Parse the date-time string
    const date = new Date(dateTimeString);
  
    // Ensure the date is valid
    if (isNaN(date)) {
      return 'Invalid date';
    }
  
    // Format the hours and minutes
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    // Format the day
    const day = date.getDate().toString().padStart(2, '0');
  
    // Format the month
    const monthNames = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
  
    // Combine the formatted parts
    return `${hours}:${minutes}, ${day}-${month}`;
  }