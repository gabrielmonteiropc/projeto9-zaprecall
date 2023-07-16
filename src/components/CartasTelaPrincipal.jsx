import imagemPerguntasF from './../assets/seta_play.png'
import styled from 'styled-components'
import imagemPerguntasA from './../assets/seta_virar.png'


export default function CartasTelaPrincipal() {
    return (
        // <PerguntasF>
        //     <p>Pergunta 01</p>
        //     <img src={imagemPerguntasF} alt='Imagem play das perguntas' />
        // </PerguntasF>

        < PerguntasA>
            {/*O que é JSX
            <img src={imagemPerguntasA} alt='Imagem play das perguntas' />*/}

            JSX é uma sintase
            escrever HTML dentro do JS
            <Botoes>
                <Botao>Não lembrei</Botao>
                <Botao>Quase não lembrei</Botao>
                <Botao>Zap!</Botao>
            </Botoes>
        </PerguntasA>
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
    background-color: blue;
    border-radius: 5px;
    border: 1px solid blue;
    padding: 5px;
`;