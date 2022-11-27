import { ServicesCard } from './ServicesCard';

export const Services: React.FC = ({}) => {
  return (
    <div className="Services__container">
      <div className="Services__content">
        <h3>Solutions & Services</h3>
        {/* icons */}
        <span className="sub-title">We bring your ideas to life!</span>
        <div className="Services__cards">
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </div>
    </div>
  );
};
