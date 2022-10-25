import React from 'react'
import './styles.scss'
import foto from '../../assets/icons/01d.png'

const CurrentWeather = () => {
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='weather-city'>Brasila</p>
          <p className='weather-description'>Ensolarado</p>
        </div>
        <img className='weather-icon' alt='tempo-icon' src={foto} />
      </div>
      <div className='bottom'>
        <p className='weather-temperature'>
          18
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
              22
            </span>
          </div>
          <div className='weather-parameter_row'>
            <span className='weather-parameter-label'>
              Vento
            </span>
            <span className='weather-parameter-value'>
              2 m/s
            </span>
          </div>
          <div className='weather-parameter_row'>
            <span className='weather-parameter-label'>
              Humidade
            </span>
            <span className='weather-parameter-value'>
              2%
            </span>
          </div>
          <div className='weather-parameter_row'>
            <span className='weather-parameter-label'>
              Pressão
            </span>
            <span className='weather-parameter-value'>
              15 hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather