import { useEffect, useState } from 'react';
import { getNews } from '../services/newsService';
import NewsCard from '../components/NewsCard';

function Home() {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('technology');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadNews();
  }, [category]);

  const loadNews = async () => {
    setLoading(true);

    const data = await getNews(category);

    setNews(data);

    setLoading(false);
  };

  return (
    <div>
      <h1>Noticias React App</h1>

      <div className="categories">
        <button onClick={() => setCategory('technology')}>
          Tecnología
        </button>

        <button onClick={() => setCategory('sports')}>
          Deportes
        </button>

        <button onClick={() => setCategory('business')}>
          Negocios
        </button>

        <button onClick={() => setCategory('health')}>
          Salud
        </button>
      </div>

      {loading ? (
        <h2>Cargando noticias...</h2>
      ) : (
        <div className="news-grid">
          {news.map((article, index) => (
            <NewsCard key={index} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;