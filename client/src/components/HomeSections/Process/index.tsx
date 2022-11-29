import { HeadingSection } from '../../HeadingSection';
import { process } from '../../../assets';
import ProcessCard from './ProcessCard';
import '../style.css';

const ProcessWork: React.FC = ({}) => {
  return (
    <div className="Process__container">
      <div className="Process__content">
        <HeadingSection
          title="How it Works"
          subTitle="We embrace organized and effective process to get the best results
            for our clients."
        />
        <div className="Process__section">
          <div className="Process__row">
            <div className="Process__left">
              <ProcessCard />
              <div className="line">
                <svg x="0px" y="0px" width="312px" height="130px">
                  <path
                    className="dashed1"
                    fill="none"
                    stroke="rgb(95, 93, 93)"
                    stroke-width="1"
                    stroke-dasharray="1300"
                    stroke-dashoffset="0"
                    d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338"
                  ></path>
                  <path
                    className="dashed2"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-dasharray="6"
                    stroke-dashoffset="1300"
                    d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338 "
                  ></path>
                </svg>
              </div>
            </div>
            <div className="Process__right">
              <div className="Process__image">
                <img src={process} alt="process" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProcessWork;
