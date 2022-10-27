import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";


  const WEEK_DAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

const Forecast = ({ data }) => {

  const dayInAWeek = new Date().getDay()
  const forecastDays= WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))
  // console.log(forecastDays);

  return (
    <div className='forecast'>
        <label className='forecast-title'>
            Diário
        </label>
        {/*allowZeroExpanded - permite que todos os Accordion sejam fechados */}
        <Accordion allowZeroExpanded>
          { 
            data.list.splice(0, 7).map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className='forecast-daily-item'>
                    <img alt='weather' className='forecast-daily-icon_small' src={`icon/${item.weather[0].icon}`} />
                    <label className='forecast-daily-day'>
                      {forecastDays[index]}
                    </label>
                    <label className='forecast-daily-description'>
                      {item.weather[0].description}
                    </label>
                    <label className='forecast-daily-min-max'>
                    {Math.round(item.main.temp_max)}°C {' '} {Math.round(item.main.temp_min)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
            </AccordionItem>
            ))
          }
        </Accordion>
    </div>
  )
}

export default Forecast