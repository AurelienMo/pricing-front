import i18next from "i18next";
import {initReactI18next} from "react-i18next";
import translationFr from './fr.json';

const resources = {
    fr: {
        translation: translationFr,
    }
}

i18next
    .use(initReactI18next)
    .init({
        resources: resources,
        lng: "fr",
        interpolation: {
            escapeValue: false
        }
    })

export default i18next;
