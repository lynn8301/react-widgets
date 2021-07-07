import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Convert = ({ language, text}) => {
    const [translated, setTranslated] = useState('')
    const [debounceText, setDebounceText] = useState(text)
    useEffect(() => {
        const termId = setTimeout(() => {
            setDebounceText(text)
        }, 500)

        return () => {
            clearTimeout(termId)
        }
    }, [text])


    useEffect(() => {
        const doTranslate = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debounceText,
                    target: language.value,
                    key: 'AIzaSyDSNUBVpw_ePnUCVJIwLA1Eips1VuvNeAo'
                }
            })
            setTranslated(data.data.translations[0].translatedText)
        }

        doTranslate()
    }, [language, debounceText])

    return(
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}

export default Convert