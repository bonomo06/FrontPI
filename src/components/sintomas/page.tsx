//Aqui vou usar o <Card> para exibir os sintomas em um card. Com bonequinhos mostrando os sintomas.
import Card from "@/components/card/page"

export default function Sintomas() {
    return (
        <>
        <h1 className="text-center mt-20 mb-10 text-2xl">Sintomas</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 m-5 p-3 gap-4">
            {/*parte 1*/}
                <Card>
                    <div className="bg-slate-400 text-white rounded shadow-lg shadow-gray-500 text-center w-full sm:w-6/12 grid grid-cols-2 mx-auto">
                        <p><b>Dor de cabeça: </b>Intensa e localizada, muitas vezes acompanhada de sensação de peso.</p>
                        <p><img src="/assets/dorcabeca.png" width="100px"></img></p>
                    </div>
                </Card>
                <Card>
                    <p></p>
                </Card>
            {/*parte 2*/}
                <Card>
                    <p></p>
                </Card> 
                <Card>
                <div className="bg-slate-400 text-white rounded shadow-lg shadow-gray-500 text-center w-full sm:w-6/12 grid grid-cols-2 mx-auto">
                        <p><b>Dor nos olhos: </b>Sensação de pressão, especialmente ao movimentar os olhos ou à luz intensa.</p>
                        <p><img src="/assets/olho.png" width="100px"></img></p>
                    </div>
                </Card>
            {/*parte 3*/}
            <Card>
                    <div className="bg-slate-400 text-white rounded shadow-lg shadow-gray-500 text-center w-full sm:w-6/12 grid grid-cols-2 mx-auto">
                        <p><b>Febre: </b>Alta, geralmente superior a 39°C, aparecendo repentinamente.</p>
                        <p><img src="/assets/febre.png" width="100px"></img></p>
                    </div>
                </Card>
                <Card>
                    <p></p>
                </Card>
            {/*parte 4*/}
                <Card>
                    <p></p>
                </Card> 
                <Card>
                <div className="bg-slate-400 text-white rounded shadow-lg shadow-gray-500 text-center w-full sm:w-6/12 grid grid-cols-2 mx-auto">
                        <p><b>Náusea: </b>Sensação de enjoo constante, muitas vezes acompanhada de mal-estar.</p>
                        <p><img src="/assets/tontura.png" width="100px"></img></p>
                    </div>
                </Card>
            {/*parte 5*/}
            <Card>
                    <div className="bg-slate-400 text-white rounded shadow-lg shadow-gray-500 text-center w-full sm:w-6/12 grid grid-cols-2 mx-auto">
                        <p><b>Vômito: </b>Pode ocorrer devido à náusea intensa, dificultando a alimentação.</p>
                        <p><img src="/assets/vomito.png" width="100px"></img></p>
                    </div>
                </Card>
                <Card>
                    <p></p>
                </Card>
            {/*parte 6*/}
                <Card>
                    <p></p>
                </Card> 
                <Card>
                <div className="bg-slate-400 text-white rounded shadow-lg shadow-gray-500 text-center w-full sm:w-6/12 grid grid-cols-2 mx-auto">
                        <p><b>Diarreia: </b>Evacuação frequente e líquida, que pode ocorrer junto com outros sintomas gastrointestinais.</p>
                        <p><img src="/assets/diarreia.png" width="100px"></img></p>
                    </div>
                </Card>
            {/*parte 7*/}
            <Card>
                    <div className="bg-slate-400 text-white rounded shadow-lg shadow-gray-500 text-center w-full sm:w-6/12 grid grid-cols-2 mx-auto">
                        <p><b>Sangramentos: </b>Pequenos sangramentos nas gengivas ou nariz, mais raros, mas indicativos de complicação.</p>
                        <p><img src="/assets/sangramento.png" width="100px"></img></p>
                    </div>
                </Card>
                <Card>
                    <p></p>
                </Card>
            {/*parte 8*/}
                <Card>
                    <p></p>
                </Card> 
                <Card>
                <div className="bg-slate-400 text-white rounded shadow-lg shadow-gray-500 text-center w-full sm:w-6/12 grid grid-cols-2 mx-auto">
                        <p><b>Mal-estar: </b>Sensação geral de desconforto, fraqueza e indisposição.</p>
                        <p><img src="/assets/malestar.png" width="100px"></img></p>
                    </div>
                </Card>
            {/*parte 9*/}
            <Card>
                    <div className="bg-slate-400 text-white rounded shadow-lg shadow-gray-500 text-center w-full sm:w-6/12 grid grid-cols-2 mx-auto">
                        <p><b>Falta de apetite: </b>Perda de interesse em comer devido ao mal-estar e náusea.</p>
                        <p><img src="/assets/faltaapetite.png" width="100px"></img></p>
                    </div>
                </Card>
                <Card>
                    <p></p>
                </Card>
            {/*parte 10*/}
                <Card>
                    <p></p>
                </Card> 
                <Card>
                <div className="bg-slate-400 text-white rounded shadow-lg shadow-gray-500 text-center w-full sm:w-6/12 grid grid-cols-2 mx-auto">
                        <p><b>Cansaço: </b>Fadiga extrema, dificultando atividades normais do dia a dia.</p>
                        <p><img src="/assets/fadiga.png" width="100px"></img></p>
                    </div>
                </Card>
            {/*parte 11*/}
            <Card>
                    <div className="bg-slate-400 text-white rounded shadow-lg shadow-gray-500 text-center w-full sm:w-6/12 grid grid-cols-2 mx-auto">
                        <p><b>Manchas vermelhas: </b>Erupções cutâneas ou petequias, que aparecem como manchas avermelhadas na pele.</p>
                        <p><img src="/assets/mancha.png" width="100px"></img></p>
                    </div>
                </Card>
                <Card>
                    <p></p>
                </Card>
            {/*parte 12*/}
                <Card>
                    <p></p>
                </Card> 
                <Card>
                <div className="bg-slate-400 text-white rounded shadow-lg shadow-gray-500 text-center w-full sm:w-6/12 grid grid-cols-2 mx-auto">
                        <p><b>Dor abdominal: </b>Dor no estômago ou região inferior, que pode ser severa e desconfortável.</p>
                        <p><img src="/assets/dorAbdomen.png" width="100px"></img></p>
                    </div>
                </Card>
            </div>
        </>
    )
}