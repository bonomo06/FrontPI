"use client"
import React, { useState, useEffect } from 'react';

const images = [
  { src: '/assets/imagem1Dengue.jpg', url: 'https://www.tuasaude.com/dengue/' }, 
  { src: '/assets/imagem2Dengue.jpg', url: 'https://hsv.org.br/dengue-sinais-de-alerta-formas-de-prevencao-e-tratamento/' },
  { src: '/assets/imagem4Dengue.jpeg', url: 'https://www.indaiatuba.sp.gov.br/saude/vigilancia-em-saude/vigilancia-epidemiologica/dengue/' }, 
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
      const interval = setInterval(() => {
          setFade(false);
          setTimeout(() => {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
              setFade(true);
          }, 500); 
      }, 4000); // Muda a imagem a cada 4 segundos

      return () => clearInterval(interval); 
  }, []);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
    }, 500);
};

const handlePrevious = () => {
    setFade(false);
    setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        setFade(true);
    }, 500);
};

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full text-center">
      <div className="w-full h-full mx-auto">
        <img
          src={currentImage.src}
          alt={`Imagem ${currentIndex + 1}`}
          className={`w-full h-auto sm:h-[600px] lg:h-[800px] object-cover transition-opacity duration-1000 ease-in-out ${fade ? 'opacity-100' : 'opacity-0'}`}
          style={{ borderRadius: '10px' }}
        />
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 cursor-pointer sm:left-4 lg:left-2"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 cursor-pointer sm:right-4 lg:right-2"
        >
          →
        </button>
      </div>

    <div className="mt-4">
      <a href={currentImage.url} target="_blank" rel="noopener noreferrer">
        <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto">
          Ir para o site
        </button>
      </a>
    </div>
  </div>
  );
}