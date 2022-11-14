import { useState } from 'react'
import arrow from '../assets/arrow.png'
import '../styles/components/Collapse.css'

function Description({title, content}) {

    const [isOpen, setIsOpen] = useState(false)
   
    return isOpen? (
        <div className="collapse-container">
            <div className='collapse-header'>
                <h3>{title}</h3>
                <button onClick={() => setIsOpen(false)}><img src={arrow} alt="arrow"/></button>
            </div>
            <div className='collapse-content'>
                {typeof content === "string" ?  <p>{content}</p> : <ul>{content.map((el) => <li key={el}>{el}</li>)}</ul>}
            </div>
        </div>
    ) : (
        <div className="collapse-container">
            <div className='collapse-header'>
                <h3>{title}</h3>
                <button onClick={() => (
                    setIsOpen(true)
                )}>
                    <img src={arrow} alt="arrow"/>
                </button>
            </div>
        </div>
    )
}

export default Description
