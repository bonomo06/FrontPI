import axios from "axios";

const BASE_URL = "https://newsapi.org/v2/everything";

export const getNewsAboutDengue = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: "dengue", // A palavra-chave para buscar notícias sobre dengue
        apiKey: "cd4468b2d7c14c9993c402fa4ed51e80",
        language: "pt", // Notícias em português
        sortBy: "publishedAt", // Ordena as notícias pela data de publicação
        pageSize: 6, // Limita o número de resultados
      },
      // headers: {
      //   "x-api-key": API_KEY
      // },
    });
    return response.data.articles; // Retorna as notícias encontradas
  } catch (error) {
    console.error("Erro ao buscar notícias", error);
    return [];
  }
};