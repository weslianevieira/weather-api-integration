import React, { useState } from 'react'
import './styles.scss'
import SearchInput from './components/SearchInput/SearchInput'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import{ WEATHER_API_URL, WEATHER_API_KEY} from './services/resquests'
import Forecast from './components/Forecast/Forecast'

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  // autocomplete busca
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&lang=pt_br&units=metric`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}}&lang=pt_br&units=metric`); 
  
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className='site-container'>
      <SearchInput onSearchChange={handleOnSearchChange} />
      {/* se exise mostrar dados*/}
      { currentWeather && <CurrentWeather data={currentWeather}/>}
      { forecast && <Forecast data={forecast}/>}
    </div>
  )
}

export default App
