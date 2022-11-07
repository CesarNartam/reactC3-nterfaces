import './HomePage.css'
import NavBar from '../../containers/NavBar/NavBar.jsx'
import Card from '../../containers/Card/Card.jsx';


function HomePage() {
  return (
    <>
      <NavBar />
      <div className='home'>
        <div className="cards">
          <Card />
        </div>
      </div>
    </>

  );
}

export default HomePage;