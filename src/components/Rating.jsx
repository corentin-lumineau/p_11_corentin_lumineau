import emptyStar from '../assets/empty_star.png'
import fullStar from '../assets/full_star.png'

function Rating({rating}) {
    const range = [1, 2, 3, 4, 5]

    return(
        range.map((rangeElement) => 
            rating >= rangeElement ? (
                <img src={fullStar} alt="fullstar" key={rangeElement} />
            ) : (
                <img src={emptyStar} alt="emptystar" key={rangeElement}/> 
            )
        )
    )
}

export default Rating