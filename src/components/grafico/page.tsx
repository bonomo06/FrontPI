"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js'
import { toPadding } from "chart.js/helpers";

ChartJS.register(ArcElement, Tooltip, Legend);

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
        return <div className="text-center">Carregando...</div>;
    }

    // Configuração dos gráficos
    const virusDataConfig = {
        labels: ["DENV-1", "DENV-2", "DENV-3", "DENV-4"],
        datasets: [
        {
            label: "Virus",
            data: virusData,
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
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
            "#AA6384",
            "#56A2EB",
            "#FECE56",
            "#FDB45C",
            "#FF5A5E",
            "#BFBF30",
            "#46BFBD",
            "#FDBF45",
            "#949FB1",
            "#4D5360",
            "#AC64AD",
            "#DAA520",
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
                },
            },
        },
    };

    return (
        <>
            <h1 className="text-center text-2xl text-black">Gráficos</h1>
            <div className="flex flex-col md:flex-row justify-around items-center w-full p-4">
            <div className="w-full max-w-xs md:max-w-sm h-[500px] bg-slate-950 p-4 rounded-lg shadow-lg">
                <h3 className="text-center text-white mb-4">Gráfico de Vírus</h3>
                <div className="h-[350px] flex items-center justify-center">
                    <Doughnut data={virusDataConfig} options={options} />
                </div>
            </div>
            <div className="w-full max-w-xs md:max-w-sm h-[500px] p-4 bg-stone-900 rounded-lg shadow-lg">
                <h3 className="text-center text-white mb-4">Gráfico de Sintomas</h3>
                <div className="h-[400px] flex items-center justify-center">
                    <Doughnut data={symptomDataConfig} options={options} />
                </div>
            </div>
            </div>
        </>
    );
}