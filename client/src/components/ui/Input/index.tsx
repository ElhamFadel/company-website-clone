import './style.css';
interface InputProps {
  type: string;
  value?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ type, value, placeholder }) => {
  return (
    <div className="input-wraper">
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
