export function formatDate(dateString) {
  const date = new Date(dateString); // Convert the input string into a Date object
  
  // Use Intl.DateTimeFormat to format the date
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('en-US', options).format(date); // Format as "Month Day, Year"
}


