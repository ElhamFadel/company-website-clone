import { Input } from '../ui';
import './style.css';
interface FormProps {}

const Form: React.FC<FormProps> = ({}) => {
  return (
    <>
      <form className="form-container">
        <div className="form-content">
          <div className="row">
            <Input type="text" placeholder="Name*" />
            <Input type="email" placeholder="E-mail Address*" />
          </div>
          <Input type="text" placeholder="Software Licencing" />
          <textarea placeholder="Message" className="message" />
          <Input type="submit" value="Submit Now" />
        </div>
      </form>
    </>
  );
};

export default Form;
