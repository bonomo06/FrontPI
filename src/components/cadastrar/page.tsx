import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Cadastrar() {
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [sintomas, setSintomas] = useState<any[]>([]); // Tipo explícito para sintomas (array de qualquer tipo)
  const [sintomasSelecionados, setSintomasSelecionados] = useState<number[]>([]); // Tipo explícito para sintomasSelecionados (array de números)
  const [virus, setVirus] = useState<any[]>([]);
  const [virusSelecionados, setVirusSelecionados] = useState<number[]>([0]);

  const formatarSintoma = (nome: string) => {
    // Usando um 'if' ou 'switch' para mapear os sintomas específicos
    if (nome === "DORDECABECA") return "Dor de cabeça";
    if (nome === "DORNOOLHO") return "Dor no olho";
    if (nome === "FEBRE") return "Febre";
    if (nome === "NAUSEA") return "Náusea";
    if (nome === "VOMITO") return "Vômito";
    if (nome === "DIARREIA") return "Diarreia";
    if (nome === "SANGRAMENTO") return "Sangramento";
    if (nome === "MALESTAR") return "Mal-estar";
    if (nome === "FALTADEAPETITE") return "Falta de apetite";
    if (nome === "CANSACO") return "Cansaço";
    if (nome === "MANCHAS") return "Manchas";
    if (nome === "DORABDOMINAL") return "Dor abdominal";
    
    // Caso o sintoma não esteja no mapeamento, retorna o nome original
    return nome;
  };

  // Carregar sintomas da API ao carregar a página
  useEffect(() => {
    async function fetchSintomas() {
      try {
        const response = await axios.get('https://pi2-fatec.onrender.com/api/sintomas');
        console.log('Sintomas carregados:', response.data); // Verifique o formato dos sintomas
        if (Array.isArray(response.data)) {
          setSintomas(response.data); // Carregando os sintomas para exibir no formulário
        } else {
          console.error('Formato de dados inesperado:', response.data);
        }
      } catch (error) {
        console.error('Erro ao carregar sintomas:', error);
      }
    }
    fetchSintomas();
  }, []);

  useEffect(() => {
    async function fetchVirus() {
      try {
        const response = await axios.get('https://pi2-fatec.onrender.com/api/virus');
        console.log('Virus carregados:', response.data); // Verifique o formato dos virus
        if (Array.isArray(response.data)) {
          setVirus(response.data); // Carregando os virus para exibir no formulário
        } else {
          console.error('Formato de dados inesperado:', response.data);
        }
      } catch (error) {
        console.error('Erro ao carregar virus:', error);
      }
    }
    fetchVirus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Cadastro do usuário e obtenção do ID do usuário
      const userResponse = await axios.post('https://pi2-fatec.onrender.com/api/users', { email, name });
      const userId = userResponse.data.id;
      console.log('ID do usuário:', userId); // Verifique o ID do usuário retornado

      // 2. Associar sintomas selecionados ao ID do usuário na tabela user_sintomas
      const sintomasAssociados = sintomasSelecionados.map(sintomaId => ({
        userId, 
        sintomaId // Corrigido para "sintomaId"
      }));
      console.log('Sintomas selecionados para associação:', sintomasAssociados); // Verifique os sintomas selecionados

      // Enviar associação dos sintomas para o banco
      await Promise.all(
        sintomasAssociados.map((sintoma) =>
          axios.post('https://pi2-fatec.onrender.com/api/sintomas/user-symptom', sintoma)
        )
      );

      // 3. Associar virus selecionados ao ID do usuário na tabela user_virus
      const virusAssociados = virusSelecionados.map(virusId => ({
        userId, 
        virusId // Corrigido para "virusId"
      }));

      // Enviar associação dos virus para o banco
      await Promise.all(
        virusAssociados.map((virus) =>
          axios.post('https://pi2-fatec.onrender.com/api/virus/user-virus', virus)
        )
      );

      alert('Usuário, sintomas e virus cadastrados com sucesso!');
      
      // Limpar campos após sucesso
      setname('');
      setEmail('');
      setSintomasSelecionados([]);
      setVirusSelecionados([]);
    } catch (error) {
      console.error('Erro ao cadastrar usuário e sintomas:', error);
      alert('Erro ao cadastrar. Tente novamente.');
    }
  };

  const handleSelectSintoma = (e) => {
    const selectedId = parseInt(e.target.value);
    setSintomasSelecionados((prev) =>
      prev.includes(selectedId) ? prev.filter((id) => id !== selectedId) : [...prev, selectedId]
    );
  };

  const handleSelectVirus = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = Number(event.target.value);
  
    setVirusSelecionados(prevState => 
      prevState.includes(selectedId)
        ? [] // Limpa o array se o ID já estiver selecionado (deseleciona)
        : [selectedId] // Coloca o novo ID no array
    );
  };
  

  return (
    <>
  <div>
      <h1 className='text-center m-20 text-xl font-bold font-mono'>Cadastrar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-5 m-10 bg-gray-500 text-white rounded p-5 shadow-lg shadow-gray-500'>
          <div>
            <label>
              Nome:
              <input className='bg-white rounded p-1 m-1 w-60' type="text" value={name} onChange={(e) => setname(e.target.value)} required />
            </label>
            <br />
            <label>
              Email:
              <input className='bg-white rounded p-1 m-1 w-60' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
          </div>
          <h3 className='text-xl'>Selecione os sintomas:</h3>
          <div>
          {sintomas.map((sintoma) => (
            <div key={sintoma.id}>
              <label>
                <input
                  type="checkbox"
                  value={sintoma.id}
                  checked={sintomasSelecionados.includes(sintoma.id)}
                  onChange={handleSelectSintoma}
                />
                {formatarSintoma(sintoma.name)}
              </label>
            </div>
          ))}
          </div>
          <h3 className='text-xl'>Selecione os virus:</h3>
          <div>
          {virus.map((virus) => (
            <div key={virus.id}>
              <label>
                <input
                  type="checkbox"
                  value={virus.id}
                  checked={virusSelecionados.includes(virus.id)}
                  onChange={handleSelectVirus}
                />
                {virus.name}
              </label>
            </div>
          ))}
          </div>
          <div></div>
          <div></div>
          <div>
          <button className='m-10 bg-white text-gray-500 p-3 rounded shadow-lg' type="submit">Cadastrar</button>
          </div>
        </div>
        </form>
    </div>
    </>
  );
}
