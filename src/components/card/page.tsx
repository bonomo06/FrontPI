import React from 'react'

interface CardProps {
    children: React.ReactNode;
    buttonText?: string; // Texto do botão
    onButtonClick?: () => void; // Função para o clique no botão
    bgColor?: string; // Cor de fundo do card
    textColor?: string; // Cor do texto do card
    shadow?: string; // Sombra do card
}

export default function Card({ children, buttonText, onButtonClick, bgColor, textColor, shadow }: CardProps) {

    return (
        <div className={`${bgColor} ${textColor} ${shadow} rounded`}>
            {children}
            {buttonText && onButtonClick && (
                <button
                    onClick={onButtonClick}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-700"
                >
                    {buttonText}
                </button>
            )}
        </div>
    )
}