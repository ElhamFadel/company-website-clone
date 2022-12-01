import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCalendarAlt,
  faUser,
  faComments,
} from '@fortawesome/free-regular-svg-icons';
import './style.css';
interface ArticleProps {
  data: {
    title: string;
    img: string;
  };
}

const Article: React.FC<ArticleProps> = ({ data: { title, img } }) => {
  return (
    <div className="article-card">
      <div className="article-container">
        <div className="article-image">
          <img src={img} alt="image-article" />
        </div>
        <div className="article-content">
          <ul className="article-date">
            <li className="date-item">
              <FontAwesomeIcon icon={faCalendarAlt}></FontAwesomeIcon>
              <span>12 August، 2020</span>
            </li>
          </ul>
          <h3 className="title-h3">{title}</h3>
          <ul className="article-details">
            <li className="details-item">
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              By Admin
            </li>
            <li className="details-item">
              <FontAwesomeIcon icon={faComments}></FontAwesomeIcon>0 Comments
            </li>
          </ul>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default Article;
