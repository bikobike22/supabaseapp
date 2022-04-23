import React, { createContext, useContext, useState } from 'react'
import context from 'react-bootstrap/esm/AccordionContext'
import i18Next from './i18Init'

const default_context = {
    getLng: {},
    setLng: () => { },
    changeLng: () => { },
    translate: () => { },
}
    
// create context

const TranslationsContext = createContext(default_context)

const TranslationsProvider = ({children}) => {
    const [lng, setLng] = useState()

    const changeLng = () => {
        lng === "en" ? setLng("ar") : setLng("en")
    }

    const translate = (key ) => {
        return i18Next.t(key, {lng})
    }


    const context = {
        getLng: lng,
        setLng,
        changeLng,
        translate,
    }

   // return context.Provider value= context
  return (
      <TranslationsContext.Provider value={context}>{ children}</TranslationsContext.Provider>
  )
}

export default TranslationsProvider

export const useTranslation = () => useContext(TranslationsContext)
