import { Logo } from '../../assets';
import { NavLink } from 'react-router-dom';
import { Routs } from './Navigation';
const Navbar: React.FC = ({}) => {
  return (
    <div className="Header__container">
      <div className="Header__logo">
        <img src={Logo} alt="logo-dash" />
      </div>
      <ul className="Header__Nav">
        {Routs.map(({ name, link }) => (
          <NavLink to={link} key={name}>
            {name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
export default Navbar;
