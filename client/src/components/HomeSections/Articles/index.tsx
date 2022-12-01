import { HeadingSection } from '../../HeadingSection';
import { flutter, img2, img3 } from '../../../assets';
import Article from './Article';

interface ArticlesProps {}
const articles = [
  {
    img: flutter,
    title: '5 Reasons to Choose Flutter for Mobile App',
  },
  {
    img: img2,
    title: 'Top Reasons to Choose Node.JS For Web App',
  },
  {
    img: img3,
    title: '8 Features That Make PHP Laravel Framework Best',
  },
];
const Articles: React.FC<ArticlesProps> = ({}) => {
  return (
    <section className="articles">
      <div className="article-container">
        <HeadingSection title="Latest Articles" />
        <div className="article-cards">
          {articles.map((data) => (
            <Article data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
