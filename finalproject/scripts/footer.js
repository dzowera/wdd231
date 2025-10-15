const dateElement = document.querySelector('#date');

if (dateElement) {
  const today = new Date();
  const formattedDate = today.toDateString(); 
  dateElement.textContent = formattedDate;
}