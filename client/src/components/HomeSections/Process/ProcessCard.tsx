import '../style.css';
interface ProcessCardProps {}

const ProcessCard: React.FC<ProcessCardProps> = ({}) => {
  return (
    <div className="process__card">
      <div className="process__card__container">
        <div className="circle__color"></div>
        <div className="process__card__text">
          <h3 className="title-h3">Analysis & Design</h3>
          <p>
            We THOROUGHLY analyze your business needs to design and devise the
            best solutions for all your functional and non-functional needs.
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProcessCard;
