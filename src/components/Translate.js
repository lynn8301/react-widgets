import React, {useState} from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
    {
        label: 'Chinese',
        value: 'zh-TW'
    },
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'Germany',
        value: 'de'
    },
    {
        label: 'Thai',
        value: 'th'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')
    return (
        <div>
            <div className="ui form">
                <div className="filed">
                    <label>Enter text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown 
                label="Select languages"
                selected={language} 
                onSelectedChange={setLanguage} 
                options={options} 
            />

            <hr />
            <h3 className="header">Output</h3>
            <Convert language={language} text={text}/>
        </div>
    )
}

export default Translate