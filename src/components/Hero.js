import { FaSearch } from "react-icons/fa";
import '../css/Hero.css';

const Hero = ({ query, setQuery }) => {
  return (
    <section className='hero'>
      <div className="hero-content">
        <h1 className="hero-title">Read &#8226; Listen &#8226; Watch</h1>
        <p className="hero-description">
          Are you ready for a creative twist? <br /> Explore our library, uncover your favourites and enjoy in your preferred format.
        </p>
        <div className="herosearch-bar">
          <div className='herosearch-input-container'>
            <input 
              type="text" 
              className="herosearch-input" 
              placeholder="Search by title..." 
              value={query} 
              onChange={(e) => setQuery(e.target.value)} 
            />
            <FaSearch className="herosearch-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;