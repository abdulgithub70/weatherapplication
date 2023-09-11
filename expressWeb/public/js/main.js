const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');

const temp = document.getElementById('temp');
//const temp_status = document.getElementById('temp_status');
const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText=`please type any city name`;
    }else{
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid
        =${cityVal}&units=metric&appid=864c7b1937735f7de1bab92e931b83e1`;
        const response = await fetch(url);
        const data= await response.json();
        console.log(data);
        const arrData = [data];
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;
        //temp_status.innerText = arrData[0].weather[0].main;
    }catch{
        city_name.innerText=`please enter the name properly`;
    }
    }
}

submitBtn.addEventListener('click', getInfo);