import '../styles/components/CardFlat.css'

function CardFlat({title, cover}) {
    return(
        <div className="card-flat">
            <img src={cover} alt="cover" className="cover"/>
            <h3 className='title'>{title}</h3>
        </div>
    )
}

export default CardFlat