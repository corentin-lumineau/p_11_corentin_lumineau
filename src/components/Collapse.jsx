import { useState } from 'react'
import arrow from '../assets/arrow.png'
import '../styles/components/Description.css'

function Description({title, content}) {

    const [isOpen, setIsOpen] = useState(false)
   
    return isOpen? (
        <div className="description-container">
            <div className='description-header'>
                <h3>{title}</h3>
                <button onClick={() => setIsOpen(false)}><img src={arrow} alt="arrow"/></button>
            </div>
            <div className='description-content'>
                {typeof content === "string" ?  <p>{content}</p> : <ul>{content.map((el) => <li>{el}</li>)}</ul>}
            </div>
        </div>
    ) : (
        <div className="description-container">
            <div className='description-header'>
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
