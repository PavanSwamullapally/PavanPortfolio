import { Link } from 'react-router-dom'
import './index.scss'
import Logos from '../../Assets/Images/Logos.png'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <div className="text-content">
          <h1>
            Hi, <br /> I'm Pavan Swamullapally
            <br />
            web developer
          </h1>

          <h2>Frontend / Java </h2>

          <Link to="/contact" className="flat-button">
            CONTACT ME{' '}
          </Link>

        </div>
        <div className="image-container">
          <img src={Logos} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Home
