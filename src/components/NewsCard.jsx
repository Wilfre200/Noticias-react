function NewsCard({ article }) {
  return (
    <div className="card">
      <img src={article.urlToImage} alt={article.title} />

      <div className="card-body">
        <h2>{article.title}</h2>

        <p>{article.description}</p>

        <a href={article.url} target="_blank">
          Leer más
        </a>
      </div>
    </div>
  );
}

export default NewsCard;