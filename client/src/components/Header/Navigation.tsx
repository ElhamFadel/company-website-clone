import { Routes, Route } from 'react-router-dom';
import { Contact, Blog, Home, Services, Jobs, Team } from '../../pages';
export const Routs = [
  {
    link: '/',
    component: <Home />,
    name: 'Home',
  },
  {
    link: '/services',
    component: <Services />,
    name: 'Services',
  },
  {
    link: '/jobs',
    component: <Jobs />,
    name: 'Jobs',
  },
  {
    link: '/blog-2',
    component: <Blog />,
    name: 'Blog',
  },
  {
    link: '/our-team',
    component: <Team />,
    name: 'Our Team',
  },
  {
    link: '/contact',
    component: <Contact />,
    name: 'Contact Us',
  },
];
const Navigation: React.FC = ({}) => {
  return (
    <>
      <Routes>
        {Routs.map(({ link, component }) => (
          <Route path={link} caseSensitive={false} element={component} />
        ))}
      </Routes>
    </>
  );
};

export default Navigation;
