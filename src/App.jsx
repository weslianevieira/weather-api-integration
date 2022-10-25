import React from 'react'
import './styles.scss'
import SearchInput from './components/SearchInput/SearchInput'
import CurrentWeather from './components/CurrentWeather/CurrentWeather'
import{ WEATHER_API_URL, WEATHER_API_KEY} from './services/resquests'

const App = () => {

  // autocomplete busca
  const handleOnSearchChande = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&lang=pt_br`)
  }

  return (
    <div className='site-container'>
      <SearchInput onSearchChange={handleOnSearchChande} />
      <CurrentWeather />
    </div>
  )
}

export default App
