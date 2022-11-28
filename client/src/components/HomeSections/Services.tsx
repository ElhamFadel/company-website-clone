import './style.css';
import { HeadingSection } from '../HeadingSection';
import ServicesList from './ServicesList';
const Services: React.FC = ({}) => {
  return (
    <div className="Services__container">
      <div className="Services__content">
        <HeadingSection
          title="Solutions & Services"
          subTitle="We bring your ideas to life!"
        />
        <div className="Services__cards">
          <ServicesList />
          {/* <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
