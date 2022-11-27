import { Illustr } from '../../assets';
const Hero: React.FC = ({}) => {
  return (
    <div className="Hero__container">
      <div className="Hero__content">
        <div className="Hero__leftside">
          <h2>Intelligent tech-solutions and services</h2>
          <h1>
            Dash drives your business growth by providing innovative integrated
            solutions to dominate your digital presence and unlock opportunities
            of the future.
            <button>Free Tech Consultion</button>
          </h1>
        </div>
        <div className="Hero__right">
          <img src={Illustr} alt="hero" />
        </div>
      </div>
    </div>
  );
};
export default Hero;
