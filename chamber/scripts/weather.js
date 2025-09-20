// select the HTML elements
const temp = document.querySelector('#temp');
const description = document.querySelector('#description');
const highTemp = document.querySelector('#high');
const lowTemp = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const rise = document.querySelector('#rise');
const set = document.querySelector('#set');
const icon = document.querySelector('#icon')
/*
const latitude = '-13.962204';
const longitude = '33.794028';
*/
// my data
const latitude = `-13.9626121`;
const longitude = `33.7741195`;
const myAPI = `fa1fa05dab7d8970d625f92d3201eac6`;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${myAPI}&units=metric`;

// make the async function

async function fetchAPI(){
  try{
    const response = await fetch(url);
    // if we have the response, let us check this
    if(response.ok){

      const data = await response.json();
      // console.log(data); // test if we have the data
      displayWeather(data)
    }else{
      throw Error (await response.text());
    }

  }catch (error){
    console.log(error);
  }
}



fetchAPI();

function displayWeather(data){
  temp.innerHTML = `Temp: ${data.main.temp}&deg; C`;
  description.innerHTML =`Description: ${data.weather[0].description}`;
  highTemp.innerHTML = `Max Temp: ${data.main.temp_max}&deg; C`;
  lowTemp.innerHTML = `Min Temp: ${data.main.temp_min}&deg; C`;
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  rise.innerHTML = `Sunrise: ${data.sys.sunrise}`;
  set.innerHTML = `Sunset: ${data.sys.sunset}`;
  icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
  icon.setAttribute('alt', `${data.weather[0].description}`)
}

// added a feature to update the data every 10 minutes

setInterval(fetchAPI(), 60000);
// 
