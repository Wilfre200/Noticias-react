import { useEffect, useState } from "react";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

    fetch(
      `https://gnews.io/api/v4/top-headlines?lang=es&country=do&max=10&apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Cargando noticias...</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Noticias de República Dominicana</h1>

      {news.map((article, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            marginBottom: "20px",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <img
            src={article.image}
            alt={article.title}
            style={{
              width: "100%",
              maxWidth: "500px",
              borderRadius: "10px",
            }}
          />

          <h2>{article.title}</h2>

          <p>{article.description}</p>

          <a href={article.url} target="_blank">
            Leer noticia completa
          </a>
        </div>
      ))}
    </div>
  );
}

export default App;