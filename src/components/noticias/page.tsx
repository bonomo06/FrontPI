"use client"
export default function Noticias() {
    const noticias = [
      {
        titulo: "Brasil bate recorde de mortes por dengue em 2024",
        subtitulo: "Com 5.536 óbitos confirmados até outubro, Brasil registra aumento de 400% nos casos.",
        link: "https://g1.globo.com/saude/dengue/noticia/2024/04/08/brasil-bate-recorde-historico-de-mortes-por-dengue.ghtml",
      },
      {
        titulo: "Dengue atinge 6,5 milhões de casos no Brasil até outubro",
        subtitulo: "O país vive uma epidemia com incidência de 3.221,7 casos por 100 mil habitantes.",
        link: "https://www.cofen.gov.br/dengue-aumentou-400-no-brasil-em-2024-em-comparacao-ao-ano-passado/#:~:text=O%20Brasil%20registrou%206%2C5,Arboviroses%20do%20Ministério%20da%20Saúde.",
      },
      {
        titulo: "Previsão de pico da dengue entre março e abril de 2025",
        subtitulo: "Especialistas alertam para novo aumento da doença em 2025, com risco de novos focos de infecção.",
        link: "https://www.poder360.com.br/infograficos/pico-da-dengue-no-brasil-ainda-esta-por-vir-dizem-especialistas/",
      },
      {
        titulo: "São Paulo concentra mais de 2 milhões de casos de dengue",
        subtitulo: "Estado lidera o número de infecções e mortes confirmadas pela doença.",
        link: "https://www1.folha.uol.com.br/equilibrioesaude/2024/05/estado-de-sao-paulo-ultrapassa-2-milhoes-de-casos-de-dengue-em-2024.shtml",
      },
      {
        titulo: "Vacinação contra dengue pode ser chave para controlar epidemias",
        subtitulo: "Especialistas apontam que a vacina deve ser implementada de forma mais abrangente no país.",
        link: "https://bvsms.saude.gov.br/ministerio-da-saude-anuncia-estrategia-de-vacinacao-contra-a-dengue/",
      },
    ];
  
    return (
      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6 text-center">Últimas Notícias</h1>
        <ul className="space-y-4">
          {noticias.map((noticia, index) => (
            <li
              key={index}
              className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <a
                href={noticia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h2 className="text-lg font-semibold text-blue-600 hover:underline">
                  {noticia.titulo}
                </h2>
                <p className="text-gray-700">{noticia.subtitulo}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  