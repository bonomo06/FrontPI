"use client"
import { useEffect, useState } from "react";
import { getNewsAboutDengue } from "./newsAPI";

interface Article {
    title: string;
    description: string;
    url: string;
    publishedAt: string;
}

    // Função para ajustar a descrição
    const formatDescription = (description: string, maxLength: number = 350) => {
        // Se a descrição for maior que o limite, ela é truncada e adiciona "..." no final
        if (description.length > maxLength) {
            return description.slice(0, maxLength) + "...";
        }
        return description;
};

export default function NewsList() {
    const [news, setNews] = useState<Article[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchNews = async () => {
        const newsData = await getNewsAboutDengue();

        // Filtrar para mostrar apenas notícias com palavras-chave específicas
        const filteredNews = newsData.filter((article: Article) =>
            article.title.toLowerCase().includes("dengue") || article.description.toLowerCase().includes("dengue")// Exemplo de palavra-chave
        );

        setNews(filteredNews);
        setLoading(false);
    };

    fetchNews();
    }, []);

    console.log(getNewsAboutDengue)

    if (loading) {
        return <div>Carregando notícias...</div>;
    }

    return (
        <div className="mt-20">
            <h1 className="text-center text-xl mb-8">Notícias sobre a Dengue</h1>
            <ul className="text-justify m-2">
            {news.map((article, index) => (
                <li key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <h3>{article.title}</h3>
                    <p>{formatDescription(article.description)}</p>
                    <small>{new Date(article.publishedAt).toLocaleDateString()}</small>
                    <hr className="h-8" />
                </a>
                </li>
            ))}
            </ul>
        </div>
    );
}

    //tentar pegar apenas algumas noticias, colocar imagens e formatar o texto da noticia