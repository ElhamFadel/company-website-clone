const ProcessWork: React.FC = ({}) => {
  return (
    <div className="Process__container">
      <div className="Process__content">
        <div className="Process__header">
          <h4>How it Works</h4>
          {/* icon */}
          <p className="sub-title">
            We embrace organized and effective process to get the best results
            for our clients.
          </p>
        </div>
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
