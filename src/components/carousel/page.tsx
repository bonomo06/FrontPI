"use client"
import React, { useState } from 'react';

const images = [
  { src: '/assets/imagem1Dengue.jpg', url: 'https://site1.com' }, 
  { src: '/assets/imagem2Dengue.jpg', url: 'https://site2.com' },
  { src: '/assets/imagem3Dengue.jpg', url: 'https://site3.com' }, 
  // Adicione mais objetos conforme necessário
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full text-center">
      <div className="w-full h-full mx-auto">
        <img
          src={currentImage.src}
          alt={`Imagem ${currentIndex + 1}`}
          className="w-full h-[600px] object-cover"
        />
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 cursor-pointer"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 cursor-pointer"
        >
          Próximo
        </button>
      </div>

    <div className="mt-4">
      <a href={currentImage.url} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Ir para o site
        </button>
      </a>
    </div>
  </div>
  );
}