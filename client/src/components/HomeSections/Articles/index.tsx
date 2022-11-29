import { HeadingSection } from 'components/HeadingSection';

interface ArticlesProps {}

const Articles: React.FC<ArticlesProps> = ({}) => {
  return (
    <section className="articles">
      <div className="article-container">
        <HeadingSection title="Latest Articles" />
      </div>
    </section>
  );
};

export default Articles;
