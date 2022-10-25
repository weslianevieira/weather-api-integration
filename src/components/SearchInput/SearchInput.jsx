import React, { useState } from 'react'
import './styles.scss'
import { AsyncPaginate } from 'react-select-async-paginate' //
import { GEO_API_URL, geoAPIOptions } from '../../services/resquests'

const SearchInput = ({ onSearchChange }) => {
  const [cityInput, setCityInput] = useState(null)

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}&languageCode=pt`, geoAPIOptions)
      .then(response => response.json())
      .then(response => {
        return {
          options: response.data.map((city) => {
            return {
              /*value está no site da api OpenWeather em current weather data 
              https://openweathermap.org/current*/
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            }
          })
        }
      })
      .catch(err => console.error(err));
  }

  const hanldeCityInput = (searchData) => {
    setCityInput(searchData)
    onSearchChange(searchData)
  }
  
  return (
    <div>
      <AsyncPaginate
        placeholder='Procurar por cidade'
        value={cityInput}
        loadOptions={loadOptions} //opções pro input
        onChange={hanldeCityInput}
        debounceTimeout={600}//tempo  de resposta do botão(milisegundos)
      />
    </div>
  )
}

export default SearchInput
