import React, { useState } from 'react'
import './styles.scss'
import SearchInput from './components/SearchInput/SearchInput'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import { WEATHER_API_URL, WEATHER_API_KEY } from './services/resquests'

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);

  // autocomplete busca
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ")

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&lang=pt_br&units=metric`)


    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch((err) => alert(err));
  }

  return (
    <div className='site-container'>
      <SearchInput onSearchChange={handleOnSearchChange} />
      <div className='heading'>
        <h1 className='heading-txt'>Weather for today</h1>
        <span className='heading-subtxt'>Search on the bar above and get your results </span>
      </div>
      {/* se exise mostrar dados*/}
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  )
}
export default App
