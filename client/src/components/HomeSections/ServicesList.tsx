import ServicesCard from './ServicesCard';
import './style.css';
const servicesList = [
  {
    title: 'App Interface Makeover',
    text: "Our UI designers can give your app's interface the facelift it needs to boost your sales, especially during these uncertain times.",
  },
  {
    title: 'Give Wings To Your Software Apps',
    text: 'We offer A-Z solutions for all your website needs! Boost your business performance with the best website it deserves!',
  },
  {
    title: 'Mobile Development',
    text: 'It is an application development service for Android or IOS devices, using the code Native or Native Cross Platfrom such as flutter',
  },
  {
    title: 'QA and Testing',
    text: 'We have a specialized team with great experience in Testing software using the best tools ',
  },
  {
    title: 'Software Maintenance Services',
    text: 'Dash application maintenance is a support service that ensures the stability of software applications and IT systems.',
  },
  {
    title: 'Provide consulting',
    text: 'We provide technical consulting services to help technology companies overcome any problems that require much experience',
  },
];
const ServicesList: React.FC = ({}) => {
  return (
    <>
      {servicesList.map((data) => (
        <ServicesCard data={data} />
      ))}
    </>
  );
};
export default ServicesList;
