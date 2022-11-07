
import banner from '../../assets/banner_home.png'
import CardFlat from '../../components/CardFlat'
import { flatList } from '../../data/flatList'
import "../../styles/pages/Home.css"


function Home() {
    return(
        <main className="main-wrapper">
            <div className='banner-home'>
                <img src={banner} alt="banner-img" />
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className='flats-container'>
                {flatList.map(({title, cover}) => (
                    <CardFlat title={title} cover={cover} />
                ))}
            </div>
        </main>
      
    )
}

export default Home