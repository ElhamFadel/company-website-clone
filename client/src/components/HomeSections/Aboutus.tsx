import { About } from '../../assets';
import './style.css';
const Aboutus: React.FC = ({}) => {
  return (
    <div className="aboutus__container">
      <div className="aboutus__content">
        <div className="aboutus__image">
          <div className="aboutus__image__content">
            <img src={About} alt="about-img" />
          </div>
        </div>
        <div className="aboutus__text">
          <div className="aboutus__text__content">
            <h2 className="title_h2">About Us</h2>
            <p className="para bold">
              At Dash, we provide the best innovative tech solutions to
              transform your vision into a workable product. Our expert team of
              developers, designers, and analysts takes your business goals
              personally and goes the extra mile to deeply understand your
              market burning needs and your business model.
            </p>
            <br />
            <br />
            <p className="para">
              We devote our experience, and knowledge to building valuable
              software that smoothly goes with your business operations and
              workflow. Whether you are a start-up founder or a small or
              medium-sized business owner; with our team, your business needs
              will be covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutus;
