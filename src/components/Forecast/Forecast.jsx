import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
  } from "react-accessible-accordion";

const Forecast = () => {
  return (
    <div className='forecast'>
        <label className='forecast-title'>
            Diarío
        </label>
        {/*permite que todos os Accordion sejam fechados */}
        <Accordion allowZeroExpanded>

        </Accordion>
    </div>
  )
}

export default Forecast