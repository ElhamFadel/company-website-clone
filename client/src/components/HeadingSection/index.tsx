import { rocket } from '../../assets';
import './style.css';
export const HeadingSection: React.FC = ({}) => {
  return (
    <div className="Services__heading">
      <h2 className="title_h2">Solutions & Services</h2>
      <div className="heading__icon">
        <div className="heading__wrap">
          <svg
            id="dash__right"
            width="89"
            height="20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              stroke-dasharray="5, 5"
              x1="0"
              y1="10"
              x2="350"
              y2="10"
            ></line>
          </svg>
          <img src={rocket} alt="rocket" />
          <svg
            id="dash__left"
            width="89"
            height="20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              stroke-dasharray="5, 5"
              x1="0"
              y1="10"
              x2="350"
              y2="10"
            ></line>
          </svg>
        </div>
      </div>
      {/* icons */}
      <p className="sub-title">We bring your ideas to life!</p>
    </div>
  );
};
