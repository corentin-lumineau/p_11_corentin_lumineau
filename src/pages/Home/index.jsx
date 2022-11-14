
import banner from '../../assets/banner_home.png'
import CardFlat from '../../components/CardFlat'
import "../../styles/pages/Home.css"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


function Home() {
    const [myflats, setMyFlats] = useState([])

    useEffect(() => {
        fetchMyData()
    }, [])

    const fetchMyData = () => {
        fetch("flats.json")
        .then((response) => response.json())
        .then((data) => setMyFlats(data))
   } 
        

    return(
        <main className="main-wrapper">
            <div className='banner-home'>
                <img src={banner} alt="banner-img" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className='flats-container'>
                {myflats && myflats.map(({title, cover, id}) => (
                    <Link to={`/flat/${id}`} state={{ flatsList: myflats }} key={id} ><CardFlat title={title} cover={cover} /></Link>
                ))}
            </div>
        </main>
      
    )
}

export default Home
