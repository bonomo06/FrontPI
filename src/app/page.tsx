"use client"

import Header from "@/components/header/page"
import Noticias from "@/components/noticias/page"
import Card from "@/components/card/page"
import ImageCarousel from "@/components/carousel/page"
import Grafico from "@/components/grafico/page"
import Sintomas from "@/components/sintomas/page"
import Cadastrar from "@/components/cadastrar/page"
import Footer from "@/components/rodape/page"

export default function Home() {

  return (
    <>
      <Header />
      <div className="m-10"><ImageCarousel /></div>
      <div id="news">
        <Noticias />
      </div>
      <div id="dengue">
        <h1 className="text-center mt-20 text-2xl ">Informe-se</h1>
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 mx-4 mb-10 gap-4">
          {/* <Card buttonText="Saiba mais" onButtonClick={() => alert('Botão do card clicado')}> 
            <h2>Card</h2>
            <p>Conteúdo do card</p>
          </Card> */}
          <Card bgColor="bg-slate-400" textColor="text-white" shadow="shadow-lg shadow-gray-500">
            <h2 className="text-center font-bold">Transmissão</h2>
            <p className="m-3">A dengue é transmitida pelo mosquito Aedes aegypti, presente principalmente em áreas urbanas de regiões tropicais e subtropicais, tendo 4 sorotipos: DENV-1, DENV-2, DENV-3 E DENV-4</p>
          </Card>
          <Card bgColor="bg-slate-400" textColor="text-white" shadow="shadow-lg shadow-gray-500">
            <h2 className="text-center font-bold">Doença</h2>
            <p className="m-3">A doença está associada a surtos sazonais, frequentemente em épocas de chuvas, quando há maior proliferação do mosquito transmissor.</p>
          </Card>
          <Card bgColor="bg-slate-400" textColor="text-white" shadow="shadow-lg shadow-gray-500">
            <h2 className="text-center font-bold">Controle</h2>
            <p className="m-3">O controle da dengue envolve medidas preventivas, como eliminação de focos de água parada e campanhas de conscientização para evitar a reprodução do mosquito.</p>
          </Card>
          <Card bgColor="bg-slate-400" textColor="text-white" shadow="shadow-lg shadow-gray-500">
            <h2 className="text-center font-bold">Gravidade</h2>
            <p className="m-3">A dengue pode causar sintomas graves, como hemorragias e falência de órgãos, especialmente nos casos de dengue hemorrágica, que requerem tratamento médico urgente.</p>
          </Card>
        </div>
      </div>
      <div id="sintomas" className=""><Sintomas /></div>
      <div id="grafico" className=""><Grafico /></div>
      <div className=""><Cadastrar /></div>
      <Footer />
    </>
  )
}