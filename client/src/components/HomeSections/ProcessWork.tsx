import { HeadingSection } from '../HeadingSection';
const ProcessWork: React.FC = ({}) => {
  return (
    <div className="Process__container">
      <div className="Process__content">
        <HeadingSection
          title="How it Works"
          subTitle="We embrace organized and effective process to get the best results
            for our clients."
        />
        <div className="Process__content">
          <div className="icon__container"> icon </div>
          <div className="Process__text">
            <h4>Analysis & Design</h4>
            <p>
              We THOROUGHLY analyze your business needs to design and devise the
              best solutions for all your functional and non-functional needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProcessWork;
