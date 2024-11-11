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
    <div style={{ textAlign: 'center' }}>
      <div style={{ width: '400px', height: '300px', margin: 'auto' }}>
        <img
          src={currentImage.src}
          alt={`Imagem ${currentIndex + 1}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={handlePrevious} style={{ marginRight: '10px' }}>
          Anterior
        </button>
        <button onClick={handleNext} style={{ marginRight: '10px' }}>
          Próximo
        </button>
        <a href={currentImage.url} target="_blank" rel="noopener noreferrer">
          <button>Ir para o site</button>
        </a>
      </div>
    </div>
  );
}