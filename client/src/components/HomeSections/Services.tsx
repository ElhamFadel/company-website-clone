import { ServicesCard } from './ServicesCard';
import { rocket } from '../../assets';
import './style.css';
import { HeadingSection } from '../HeadingSection';
const Services: React.FC = ({}) => {
  return (
    <div className="Services__container">
      <div className="Services__content">
        <HeadingSection />
        {/* <div className="Services__cards">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div> */}
      </div>
    </div>
  );
};

export default Services;
