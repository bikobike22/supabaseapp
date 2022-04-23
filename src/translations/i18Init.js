import i18Next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { Lanugages } from './languages/Languages'

const resources = {
    en: {
          translation: Lanugages.EN
    },
    ar: {
        translation: Lanugages.AR
    }
}
  


i18Next
    .use(initReactI18next)
    .init({
    resources,
        debug: true,
    //supportedLngs: ["ar","en"],
    lng: "en", // if you're using a language detector, do not define the lng option
  //  fallbackLng: "en",
        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    })

    i18Next.changeLanguage("ar")

export default i18Next
    

