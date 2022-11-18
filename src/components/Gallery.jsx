import { useState } from "react"
import leftArrow from '../assets/left_arrow.png'
import rightArrow from '../assets/right_arrow.png'
import '../styles/components/Gallery.css'

function Gallery({pictures}) {
  
    const [currentPicture, setCurrentPicture] = useState(pictures[0]);

    const getNextPicture = (currentPicture) => {
        let nextPicture = '';
        if (pictures[pictures.length - 1] === currentPicture) {
            nextPicture = pictures[0];
        }
        else {
            nextPicture = pictures[pictures.indexOf(currentPicture) + 1];
        }
        return nextPicture;
    }

    const getPreviousPicture = (currentPicture) => {
        let previousPicture = '';
        if (pictures[0] === currentPicture) {
            previousPicture = pictures[pictures.length - 1];
        }
        else {
            previousPicture = pictures[pictures.indexOf(currentPicture) - 1];
        }
        return previousPicture;
    }

    return(
        <div className="gallery-container">
            <button onClick={() => {
               setCurrentPicture(getPreviousPicture)
            }}>
                <img src={leftArrow} alt="" className= {pictures.length === 1 ? "hidden" : "gallery-arrow-left"}/>
            </button>
            <img src={currentPicture} alt='banner-show' className='banner-show' />
            <button onClick={() => {
                setCurrentPicture(getNextPicture)
                }} className= {{pictures}.length === 0 ? "hidden" : null}>
                    <img src={rightArrow} alt="" className= {pictures.length === 1 ? "hidden" : "gallery-arrow-right"}/>
            </button>
        </div>
    )
}

export default Gallery