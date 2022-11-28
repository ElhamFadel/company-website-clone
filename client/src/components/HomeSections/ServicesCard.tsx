import './style.css';
interface IServicesCard {
  data: { title: string; text: string };
}
const ServicesCard: React.FC<IServicesCard> = ({ data: { title, text } }) => {
  return (
    <>
      <div className="Services__card">
        <div className="Services__card__container">
          <div className="Services__card__content">
            <svg
              className="icon-bg-shape"
              xmlns="http://www.w3.org/2000/svg"
              width="100px"
              height="80px"
            >
              <path d="M95.798,66.493 C95.402,67.238 94.989,67.934 94.568,68.608 C92.140,72.492 89.322,75.200 86.228,76.996 C75.718,83.098 62.044,78.694 49.794,74.183 C30.107,66.931 13.369,52.019 4.629,32.917 C0.428,23.737 -1.365,11.491 6.138,4.714 C11.356,0.001 19.072,-0.185 26.172,0.068 C26.493,0.079 26.814,0.090 27.132,0.103 C31.363,0.275 35.595,0.448 39.826,0.620 C45.043,0.833 50.261,1.045 55.479,1.256 C57.205,1.327 58.931,1.397 60.658,1.467 C67.392,1.740 74.374,2.077 80.361,5.160 C89.583,9.908 94.528,20.156 97.310,30.121 C97.438,30.578 97.561,31.039 97.682,31.500 C100.721,43.123 101.423,55.927 95.798,66.493 Z"></path>
            </svg>
            <h3 className="title-h3">{title}</h3>
            <div className="Services__card__text">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesCard;
