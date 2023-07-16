import imagemPerguntasF from './../assets/seta_play.png'
import styled from 'styled-components'
import imagemPerguntasA from './../assets/seta_virar.png'
import { useState } from 'react';
import{vermelho, verde, amarelo, cinza } from './../mudarCorBotao.js'

export default function CartasTelaPrincipal(props) {

    const { card, indice } = props;

    //Variáveis de Estado
    const [comecar, setComecar] = useState(false);
    const [virarCarta, setVirarCarta] = useState(false);


    function mostrarPergunta() {

        setComecar(true);

    }

    function turnedCard(){

        setVirarCarta(true);
    }

    return (
        <>
            {!comecar
                ?
                (
                    <PerguntasF>
                        <p>Pergunta {indice + 1}</p>
                        <img onClick={mostrarPergunta} src={imagemPerguntasF} alt='Imagem play das perguntas' />
                    </PerguntasF>
                )
                :
                (
                    < PerguntasA>
                        {!virarCarta
                        ?
                            (
                                <>
                                    {card.question}
                                    <img onClick={turnedCard} src={imagemPerguntasA} alt='Imagem play das perguntas' />
                                </>
                            )
                        :
                            (       
                                <>
                                    {card.answer}
                                    <Botoes>
                                        <Botao corBotao={vermelho}>Não lembrei</Botao>
                                        <Botao corBotao={amarelo}>Quase não lembrei</Botao>
                                        <Botao corBotao={verde}>Zap!</Botao>
                                    </Botoes> 
                                </>
                            )
                    }
                    </PerguntasA>
                )
            }
        </>
    );
}

const PerguntasF = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
    }
`
const PerguntasA = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

const Botao = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background-color: ${ props => props.corBotao };
    border-radius: 5px;
    border: 1px solid ${ props => props.corBotao };
    padding: 5px;
`;