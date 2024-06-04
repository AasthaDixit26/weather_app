const apiKey='3ea4f8bb59f8da582bc7f27bc43deabf';
const getWeather=async(city)=>{
    return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}
    `)
    .then((res)=>res.json())
    .then((json)=>{
        return json;
    })
}
export default getWeather;