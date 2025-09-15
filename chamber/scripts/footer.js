const myName = 'Innocent Dzowera';
const simpleDate = document.lastModified;
const lastMod = new Date(document.lastModified)

document.querySelector('#name').innerHTML = myName;
document.querySelector('#year').innerHTML = `${lastMod.getFullYear()}`;
document.querySelector('#last-mod').innerHTML = simpleDate;
