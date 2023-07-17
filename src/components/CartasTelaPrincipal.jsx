import styled from 'styled-components'
import { useState } from 'react';
import imagemPerguntasA from './../assets/seta_virar.png'
import { vermelho, verde, amarelo, cinza } from './../mudarCorBotao.js'
import IconePergunta from './IconePergunta'

export default function CartasTelaPrincipal(props) {

    const { card, indice, contador, setContador } = props;

    //Variáveis de Estado
    const [comecar, setComecar] = useState(false);
    const [virarCarta, setVirarCarta] = useState(false);
    const [botaoStatus, setBotaoStatus] = useState('Ainda não respondeu');


    function mostrarPergunta() {

        if (botaoStatus === 'Ainda não respondeu') {
            setComecar(true);
        }
    }

    function turnedCard() {

        setVirarCarta(true);
    }

    function ativarBotao(resposta) {

        setBotaoStatus(resposta);
        setComecar(false);

        setContador(contador + 1);
    }

    return (
        <>
            {!comecar
                ?
                (
                    <PerguntasF data-test="flashcard" botaoStatus={botaoStatus}>
                        <p data-test="flashcard-text">Pergunta {indice + 1}</p>
                        <IconePergunta data-test="flashcard-text" mostrarPergunta={mostrarPergunta} botaoStatus={botaoStatus} />
                    </PerguntasF>
                )
                :
                (
                    < PerguntasA data-test="flashcard">
                        {!virarCarta
                            ?
                            (
                                <div data-test="flashcard-text">
                                    {card.question}
                                    <img data-test="turn-btn" onClick={turnedCard} src={imagemPerguntasA} alt='Imagem play das perguntas' />
                                </div>
                            )
                            :
                            (
                                <div data-test="flashcard-text">
                                    {card.answer}
                                    <Botoes>
                                        <Botao data-test="no-btn" onClick={() => ativarBotao('Erro')} background={vermelho}>Não lembrei</Botao>
                                        <Botao data-test="partial-btn" onClick={() => ativarBotao('Quase acertou')} background={amarelo}>Quase não lembrei</Botao>
                                        <Botao data-test="zap-btn" onClick={() => ativarBotao('Acertou')} background={verde}>Zap!</Botao>
                                    </Botoes>
                                </div>
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
        text-decoration: ${props => props.botaoStatus === 'Ainda não respondeu' ? 'none' : 'line-through'};
        color: ${props => {
        switch (props.botaoStatus) {
            case 'Erro':
                return vermelho;
            case 'Quase acertou':
                return amarelo;
            case 'Acertou':
                return verde;
            default:
                return cinza;
        }
    }}
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
    background-color: ${props => props.background};
    border-radius: 5px;
    border: 1px solid ${props => props.background};
    padding: 5px;
`;