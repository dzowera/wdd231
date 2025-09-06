// i get the last date modified - the document acts like an object with lastmodified as a property
const lastDateModified = new Date(document.lastModified);
// I now need to format the date to make it look nice and simple
const formattedDate = `${lastDateModified.getFullYear()} / 0${lastDateModified.getMonth() + 1} / 0${lastDateModified.getDay()}`;

document.querySelector('.last-modified').innerHTML = formattedDate;