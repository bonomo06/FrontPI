//Aqui vou usar o <Card> para exibir os sintomas em um card. Com bonequinhos mostrando os sintomas.
import Card from "@/components/card/page"

export default function Sintomas() {
    return (
        <>
        <div className="grid grid-cols-2">
            {/*parte 1*/}
                <Card>
                    <div className="grid grid-cols-2">
                        <p>dor de cabeça</p>
                        <p><img src="/assets/dorcabeca.png" width="100px" ></img></p>
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
                <div className="grid grid-cols-2">
                        <p>dor nos olhos</p>
                        <p><img src="/assets/olho.png"></img></p>
                    </div>
                </Card>
            {/*parte 3*/}
            <Card>
                    <div className="grid grid-cols-2">
                        <p><img src="/assets/febre.png"></img></p>
                        <p>febre</p>
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
                <div className="grid grid-cols-2">
                        <p>nausea</p>
                        <p><img src="/assets/tontura.png"></img></p>
                    </div>
                </Card>
            {/*parte 5*/}
            <Card>
                    <div className="grid grid-cols-2">
                        <p>vomito</p>
                        <p><img src="/assets/vomito.png"></img></p>
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
                <div className="grid grid-cols-2">
                        <p>diarreia</p>
                        <p><img src="/assets/diarreia.png"></img></p>
                    </div>
                </Card>
            {/*parte 7*/}
            <Card>
                    <div className="grid grid-cols-2">
                        <p>sangramentos</p>
                        <p><img src="/assets/sangramento.png"></img></p>
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
                <div className="grid grid-cols-2">
                        <p>mal estar</p>
                        <p><img src="/assets/malestar.png"></img></p>
                    </div>
                </Card>
            {/*parte 9*/}
            <Card>
                    <div className="grid grid-cols-2">
                        <p>falta de apetite</p>
                        <p><img src="/assets/faltaapetite.png"></img></p>
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
                <div className="grid grid-cols-2">
                        <p>cansaço</p>
                        <p><img src="/assets/fadiga.png"></img></p>
                    </div>
                </Card>
            {/*parte 11*/}
            <Card>
                    <div className="grid grid-cols-2">
                        <p>manchas vermelhas</p>
                        <p><img src="/assets/mancha.png"></img></p>
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
                <div className="grid grid-cols-2">
                        <p>dor abdominal</p>
                        <p><img src="/assets/dorcabeca.png"></img></p>
                    </div>
                </Card>
            </div>
        </>
    )
}