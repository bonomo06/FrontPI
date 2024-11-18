"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    TooltipItem as ChartTooltipItem
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);

interface DatalabelContext {
    dataset: { data: number[] };
}

export default function Grafico() {
    const [virusData, setVirusData] = useState<number[]>([]);
    const [symptomData, setSymptomData] = useState<number[]>([]);
    const [loading, setLoading] = useState(true);

    const virusIds = [1, 4, 5, 6];
    const symptomIds = [1, 2, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

    useEffect(() => {
        const fetchCounts = async () => {
        try {
            const virusCountsPromises = virusIds.map(async (id) => {
            const response = await axios.get(
                `https://pi2-fatec.onrender.com/api/virus/count/${id}`
            );
            return response.data.count ?? 0;
            });
            const virusCounts = await Promise.all(virusCountsPromises);
            setVirusData(virusCounts);

            const symptomCountsPromises = symptomIds.map(async (id) => {
            const response = await axios.get(
                `https://pi2-fatec.onrender.com/api/sintomas/count/${id}`
            );
            return response.data.count ?? 0;
            });
            const symptomCounts = await Promise.all(symptomCountsPromises);
            setSymptomData(symptomCounts);

            setLoading(false);
        } catch (error) {
            console.error("Erro ao buscar contagens de vírus e sintomas:", error);
            setLoading(false);
        }
        };

        fetchCounts();
    }, []);

    if (loading) {
        return <div className="text-center">Carregando gráficos...</div>;
    }

    // Configuração dos gráficos
    const virusDataConfig = {
        labels: ["DENV-1", "DENV-2", "DENV-3", "DENV-4"],
        datasets: [
        {
            label: "Virus",
            data: virusData,
            backgroundColor: ["#8B0000", "#FF0000", "#FF6347", "#FA8072"],
        },
        ],
    };

    const symptomDataConfig = {
        labels: [
        "Dor de cabeça",
        "Dor nos olhos",
        "Febre",
        "Náusea",
        "Vômito",
        "Diarréia",
        "Sangramentos",
        "Mal estar",
        "Falta de apetite",
        "Cansaço",
        "Manchas vermelhas",
        "Dor abdominal",
        ],
        datasets: [
        {
            label: "Sintomas",
            data: symptomData,
            backgroundColor: [
            "#00008B",
            "#0000CD",
            "#0000FF",
            "#6495ED",
            "#4169E1",
            "#1E90FF",
            "#00BFFF",
            "#87CEFA",
            "#87CEEB",
            "#ADD8E6",
            "#4682B4",
            "#191970",
            ],
        },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                position: "bottom" as const,
                labels: {
                    font: {
                        size: 10,
                    },
                    boxWidth: 10,
                    color: "white",
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: ChartTooltipItem<"doughnut">) => {
                        const value = tooltipItem.raw as number;
                        const total = tooltipItem.dataset.data.reduce((acc: number, current: number) => acc + current, 0);
                        const percentage = ((value / total) * 100).toFixed(2) + '%';
                        return `${tooltipItem.label}: ${percentage}`;
                    },
                },
            },
            datalabels: {
                formatter: (value: number, context: DatalabelContext) => {
                    const total = context.dataset.data.reduce((acc: number, current: number) => acc + current, 0);
                    const percentage = ((value / total) * 100).toFixed(2) + '%';
                    return percentage;
                },
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 12,
                },
            },
        },
    };

    return (
        <>
            <h1 className="text-center text-2xl text-black">Gráficos</h1>
            <p className="text-center text-xl font-bold">Estes gráficos mostram os sintomas e vírus que outros usuários sentiram quando estiveram com dengue.</p>
            <div className="flex flex-col md:flex-row justify-around items-center w-full p-4">
            <div className="w-full max-w-xs md:max-w-sm h-[500px] bg-gray-500 p-4 rounded-lg shadow-lg mb-5">
                <h3 className="text-center text-white mb-4">Gráfico de Vírus</h3>
                <div className="h-[350px] flex items-center justify-center">
                    <Doughnut data={virusDataConfig} options={options} />
                </div>
            </div>
            <div className="w-full max-w-xs md:max-w-sm h-[500px] p-4 bg-gray-500 rounded-lg shadow-lg">
                <h3 className="text-center text-white mb-4">Gráfico de Sintomas</h3>
                <div className="h-[400px] flex items-center justify-center">
                    <Doughnut data={symptomDataConfig} options={options} />
                </div>
            </div>
            </div>
        </>
    );
}