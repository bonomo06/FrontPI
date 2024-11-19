"use client"

import Header from "@/components/header/page"
import NewsList from "@/components/noticias/page"
import Infos from "@/components/info-dengue/page"
import Card from "@/components/card/page"
import ImageCarousel from "@/components/carousel/page"
import Grafico from "@/components/grafico/page"
import Sintomas from "@/components/sintomas/page"
import Cadastrar from "@/components/cadastrar/page"

export default function Home() {

  return (
    <>
      <Header />
      <ImageCarousel />
      <NewsList />
      <div className="grid grid-cols-4">
        {/* <Card buttonText="Saiba mais" onButtonClick={() => alert('Botão do card clicado')}> 
          <h2>Card</h2>
          <p>Conteúdo do card</p>
        </Card> */}
        <Card bgColor="bg-black" textColor="text-white">
          <h2>A Dengue</h2>
          <p>A dengue é transmitida pelo mosquito Aedes aegypti, presente principalmente em áreas urbanas de regiões tropicais e subtropicais.</p>
        </Card>
        <Card>
          <h2>A doença</h2>
          <p>A doença está associada a surtos sazonais, frequentemente em épocas de chuvas, quando há maior proliferação do mosquito transmissor.</p>
        </Card>
        <Card>
          <h2>Controle</h2>
          <p>O controle da dengue envolve medidas preventivas, como eliminação de focos de água parada e campanhas de conscientização para evitar a reprodução do mosquito.</p>
        </Card>
        <Card>
          <h2>Gravidade</h2>
          <p>A dengue pode causar sintomas graves, como hemorragias e falência de órgãos, especialmente nos casos de dengue hemorrágica, que requerem tratamento médico urgente.</p>
        </Card>
      </div>
      <Infos />
      <Sintomas />
      <Grafico />
      <Cadastrar />
    </>
  )
}