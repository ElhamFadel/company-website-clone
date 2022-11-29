import { illustration } from '../../assets';
import Form from './Form';
import './style.css';
interface QuestionProps {}

const Question: React.FC<QuestionProps> = ({}) => {
  return (
    <div className="question__container">
      <div className="question__content">
        <div className="question__left">
          <div className="question__left__content">
            <h2 className="title-h2">Questions or Quotes? Get in touch</h2>
            <Form />
          </div>
        </div>
        <div className="question__right">
          <img src={illustration} alt="illustration2" />
        </div>
      </div>
    </div>
  );
};

export default Question;
