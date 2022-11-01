import React from 'react'
import './styles.scss'


const CurrentWeather = ({ data }) => {
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='weather-city'>
            {data.city}
          </p>
          <p className='weather-description'>
            {data.weather[0].description}
          </p>
        </div>
        <img className='weather-icon' alt='tempo-icon' src={`icons/${data.weather[0].icon}.png`} />
      </div>
      <div className='bottom'>
        <p className='weather-temperature'>
          {Math.round(data.main.temp)}°C
        </p>
        <div className='weather-details'>
          <div className='weather-parameter_row'>
            <span className='weather-parameter-label'>
              Detalhes
            </span>
          </div>
          <hr />
          <div className='weather-parameter_row'>
            <span className='weather-parameter-label'>
              Sensação
            </span>
            <span className='weather-parameter-value'>
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className='weather-parameter_row'>
            <span className='weather-parameter-label'>
              Vento
            </span>
            <span className='weather-parameter-value'>
              {data.wind.speed}m/s
            </span>
          </div>
          <div className='weather-parameter_row'>
            <span className='weather-parameter-label'>
              Humidade
            </span>
            <span className='weather-parameter-value'>
              {data.main.pressure}%
            </span>
          </div>
          <div className='weather-parameter_row'>
            <span className='weather-parameter-label'>
              Pressão
            </span>
            <span className='weather-parameter-value'>
              {data.main.pressure}hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather