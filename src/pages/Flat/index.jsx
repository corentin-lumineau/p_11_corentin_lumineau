import { useParams, useLocation } from 'react-router-dom'
import Rating  from '../../components/Rating'
import Tag from '../../components/Tag'
import Error from '../../components/Error'
import '../../styles/pages/Flat.css'
import Collapse from '../../components/Collapse'
import Gallery from '../../components/Gallery'

function Flat() {
   
    const { flatId } = useParams();
    const location = useLocation();
    let currentFlat = {};
    let ownerFirstName = '';
    let ownerLasttName = '';
  
    if(location.state) {
        const { flatsList } = location.state
        currentFlat = flatsList.find( flat => flat.id === flatId)

        ownerFirstName = currentFlat.host.name.split(' ')[0]
        ownerLasttName = currentFlat.host.name.split(' ')[1]
    }
    
    return(
        Object.keys(currentFlat).length === 0 ? <Error /> :
        <main className='show-container'>
            <Gallery pictures={currentFlat.pictures}/>
            <section className='main-title'>
                <div className='principal-informations'>
                    <div className='flat-title'>
                        <h1>{currentFlat.title}</h1>
                        <p>{currentFlat.location}</p>
                    </div>
                    <div className='owner-informations'>
                        <div className='owner-name'>
                            <p>{ownerFirstName}</p>
                            <p>{ownerLasttName}</p>
                        </div>
                        <div className='thumbnail-container'>
                            <img src={currentFlat.host.picture} alt="owner-thumbnail" className='owner-thumbnail' />
                        </div>
                    </div>
                </div>
                <div className='secondary-informations'>
                    <div className='tags-container'>{currentFlat.tags.map((tag) => (
                        <Tag tag={tag} key={tag}/>
                    ))}
                    </div>
                    <div className='ratings'>
                        <Rating rating={currentFlat.rating}/>
                    </div>
                </div>
            </section>
            <section className='flat-informations'>
                <Collapse title="Description" content={currentFlat.description}/>
                <Collapse title="Equipements" content={currentFlat.equipments}/>
            </section>
        </main>
    )
}

export default Flat